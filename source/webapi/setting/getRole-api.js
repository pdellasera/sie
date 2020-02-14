mvc.api({
    name: "get",
    action: "role",
    methods: {
        post: methodPost
    }
}, "getRole", function (req, getRole, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function methodPost(req, getRole, send) {
    //console.log(req.plugdo.post)
    var data = await getRole.get();
    //console.log(data)
    return data;
}