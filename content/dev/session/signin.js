function signin() {
    var self = this
    this.init = function () {
        binder();
        $("#signinBtn").click(function (e) {
            e.preventDefault();
            console.log("estoy aqui")
            var input = binder(log);
            var user = {
                user: input.username,
                password: input.password
            }
            //request.post(global.api.getUser, user, function (res) {
                var isvalid = 1;
                if (isvalid == 1) {
                   // cookie.set("session", JSON.stringify(res.response.result.Database[0].Table.Row[0][0]), 1);
                    window.location.href = "/dashboard"
                } else {
                    Swal.fire({
                        title: "User o password no coinciden intentelo nuevamente",
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonText: 'Ok'
                    })
                }
            //})


        });
    }

}