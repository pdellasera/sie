mvc.api({
    name: "get",
    action: "allStudents",
    methods: {
        post: methodPost
    }
}, "getAllStudents", function (req, getAllStudents, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function methodPost(req, getAllStudents, send) {
    //console.log(req.plugdo.post)
    var data = await getAllStudents.get();
    //console.log(data)
    return data;
}