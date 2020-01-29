mvc.controller({
    name: "home",
    action: "index",
    path: "/"
}, function (req) {
    return {
        message: "message",
        name: ""
    };
});


mvc.controller({
    name: "home",
    action: "home",
    path: "/dashboard"
}, function (req) {
    return {
        name: "dashboard",
        title: "dashboard"
    };
});