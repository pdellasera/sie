function Application () {
    // this.signup = new Signup();
    this.signin = new signin();
    // this.util = new Util();

    this.init = function () {
        // new RandomImages({
        //     query: ".body-login",
        //     bg: true,
        //     seconds: 20
        // }).add([
        //     { path: globalLocation + "/img/bg-5.jpg" },
        //     { path: globalLocation + "/img/bg-2.jpg" },
        //     { path: globalLocation + "/img/bg-3-b.jpg" }
        // ]).load();

        // new Session().validate();

        // if(this.isSignup()) {
        //     this.signup.init();
        // }
    
            this.signin.init();

        // this.changeLanguage();
    }

    // this.changeLanguage = function () {
    //     $("#btnChangeEnglish").click(function () {
    //         cookie.set("locale", "en_US");
    //         window.location.reload(true);
    //     });

    //     $("#btnChangeSpanish").click(function () {
    //         cookie.set("locale", "es_ES");
    //         window.location.reload(true);
    //     });
    // }

    // this.isSignup = function () {
    //     var location = globalLocation.replace("/", "");
    //     var path = url.url.replace("http://", "").replace("https://", "").split("/");

    //     if(location == "") {
    //         if(path.length == 2 && path[1] == "register") { 
    //             return true; 
    //         } 
    //     }
    //     else {
    //         if(path.length == 3 && path[2] == "register") {
    //             return true;
    //         }
    //     }

    //     return false;
    // }

    // this.isSignin = function () {
    //     var location = globalLocation.replace("/", "");
    //     var path = url.url.replace("http://", "").replace("https://", "").split("/");
        
    //     if(location == "") {
    //         if(path.length == 2 && (path[1] == "" || path[1] == "#" || path[1].indexOf("?activate=") != -1)) { 
    //             return true; 
    //         } 
     
    //         if(path.length == 1) { 
    //             return true; 
    //         } 
    //     }
    //     else {
    //         if(path.length == 3 && 
    //             ((path[1] == location && 
    //                 path[2] == "#") ||
    //                 (path[1] == location && 
    //                     path[2] == "")|| 
    //                 path[path.length - 1].indexOf("?activate=") != -1)) {
    //             return true;
    //         }

    //         if(path.length == 2 && path[1] == location) {
    //             return true;
    //         }
    //     }

    //     return false;
    // }
}


$(document).ready(function () {
    var app = new Application();
    app.init();
});

let { url, binder, request, view, cookie, route } = plugdo;
window.global = {
    api: {
       getUser:"/api/get/check/json"
    }
}
