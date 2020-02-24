class UserValidationHadle {
    constructor() {
        var self = this;
        var util = new UtilHandle();
        this.userExist = function () {
        }
        this.userPermisos = function (data, ) {
            var datos = {
                sessionID: data.sessionID,
                action: data.action,
                model: data.model,
                module: data.module
            }
            request.post(global.api.checkPermisos, datos, function (res) {

                // MODULO USER

                // SE VALIDA QUE EL CORREO TENGA EL FORMATO CORRECTO
                if (datos.module == 101) {
                    var emailIsValid = self.emailValid(datos.model.email)
                    if (emailIsValid == false) {
                        var msn = {
                            icon: "error",
                            title: "Ups..!",
                            message: "Debe ingresar un correo valido.",
                            config: false
                        }
                        self.msn(msn);
                        return false
                    }
                }
              

                if (res.response == true) {
                    if (data.action == -1) {
                        util.add(datos, data.module)
                    }
                } else {
                    var msn = {
                        icon: "warning",
                        title: "Lo sentimos..?",
                        message: "No se te tiene permitido esta accion consulta a tu administrador!",
                        config: false
                    }
                    self.msn(msn);
                }
            })
        }

        this.emailValid = function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(String(email).toLowerCase())
        }
    
        this.msn = function (data) {
            Swal.fire({
                icon: `${data.icon}`,
                title: `${data.title}`,
                text: `${data.message}`,
                showCancelButton: `${data.config}`,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK!'
            })
            return false;
        }

    }
}
