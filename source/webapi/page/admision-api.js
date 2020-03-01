mvc.api({
    name: "add",
    action: "alumno",
    methods: {
        post: methodPost
    }
}, "insertAlumnos", function (req, insertAlumnos, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function methodPost(req, insertAlumnos, send) {
    var model = req.plugdo.post
    //console.log(req.plugdo.post)
    var data = await insertAlumnos.add(model);
    //console.log(data)
    return data;
}