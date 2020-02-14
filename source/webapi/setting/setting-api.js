mvc.api({
    name: "add",
    action: "role",
    methods: {
        post: methodPost
    }
}, "insertRole", function (req, insertRole, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function methodPost(req, insertRole, send) {
    //console.log(req.plugdo.post)
    var data = await insertRole.add(req.plugdo.post);
    //console.log(data)
    return data;
}

mvc.api({
    name: "add",
    action: "user",
    methods: {
        post: method
    }
}, "insertUser", function (req, insertUser, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function method(req, insertUser, send) {
    //console.log(req.plugdo.post)
    var data = await insertUser.add(req.plugdo.post);
    //console.log(data)
    return data;
}

mvc.api({
    name: "get",
    action: "grados",
    methods: {
        post: method
    }
}, "getGrado", function (req, getGrado, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function method(req, getGrado, send) {
    //console.log(req.plugdo.post)
    var data = await getGrado.get(req.plugdo.post);
    //console.log(data)
    return data;
}


mvc.api({
    name: "add",
    action: "Aula",
    methods: {
        post: addingAula
    }
},"insertAulas", function (req, insertAulas, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function addingAula(req, insertAulas, send) {
    //console.log(req.plugdo.post)
    var data = await insertAulas.add(req.plugdo.post);
    //console.log(data)
    return data;
}