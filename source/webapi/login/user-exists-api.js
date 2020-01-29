mvc.api({
    name: "get",
    action: "check",
    methods: {
        post: methodPost
    }
}, "isExistsUser", function (req, isExistsUser, send) { send({ error: "method not allowed", errorCode: 404 }) });
async function methodPost(req, isExistsUser, send) {
    //console.log(req.plugdo.post)
    var data = await isExistsUser.check(req.plugdo.post);
    //console.log(data)
    return data;
}