mvc.api({
    name: "check",
    action: "permisos",
    methods: {
        post: methodPost
    }
}, "checkUserPermitions", function (req, checkUserPermitions, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function methodPost(req, checkUserPermitions, send) {
    var final = false;
    var model = req.plugdo.post
    var action = model.action
    var session = {
        sessionID: model.sessionID
    }

    var data = await checkUserPermitions.verify(session);
    var response = JSON.parse(JSON.stringify(data.result.Database[0].Table.Row[0][0].permisos).split(","))
   // action -1 significa que el usuario esta realizando una accion de insercion 
   // por defecto cuando se crea el permiso de crear tambien se le inserta el de read
   // obiamente si puedes crear puedes tambien leer

    if (action == -1) {
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            if (element == "C" || element == "R") {
                final = true
            }
        }
    }
    // action -2 significa que el usuario puede actualizar 
    if (action == -2) {
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            if (element == "U") {
                final = true
            }
        }
    }

    // action -3 significa que el usuario puede eliminar 
    // este permiso solo sera permitido para los roles de Admin y superAdm
    if (action == -3) {
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            if (element == "D") {
                final = true
            }
        }
    }
    return final;
}