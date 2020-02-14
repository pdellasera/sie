class UtilHandle {
    constructor() {
        var self = this
        this.add = function (data, model) {
            var returns = false;
            var array = []

            // SE INSERTA EL MODULO DE ROLE
            if (model == 100) {
                array = new Array(data.model)
                var newData = {
                    roleName: data.model.roleName,
                    permisos: array.map(function (v) {
                        var item = ""
                        if (v.create == true && v.delete == true && v.update == true) {
                            item = "C,R,U,D"
                        }
                        if (v.create == true && v.delete == false && v.update == false) {
                            item = "C,R"
                        }
                        if (v.create == false && v.delete == true && v.update == true) {
                            item = "R,U,D"
                        }
                        if (v.create == true && v.delete == false && v.update == true) {
                            item = "C,R,U"
                        }
                        if (v.create == true && v.delete == true && v.update == false) {
                            item = "C,R,D"
                        }
                        if (v.create == false && v.delete == true && v.update == false) {
                            item = "U,R"
                        }
                        if (v.create == false && v.delete == false && v.update == true) {
                            item = "D,R"
                        }
                        return item;
                    })
                }

                // SE INSERTA SI EL MODULO ES ROLE

                //console.log(data)
                request.post(global.api.addRole, newData, function (res) {

                    var isInsert = res.response.result.Database[0].Table.Row[0]
                    console.log(isInsert)
                    if (isInsert[0].isInsert > 0 || isInsert[0].isInsert != null) {
                        Swal.fire({
                            title: 'Exito!',
                            text: "Se operacion se realizo con sactifaccion!",
                            icon: 'sucess',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        })
                        location.reload()
                    } else {
                        Swal.fire({
                            title: 'Lo sentimos..?',
                            text: "A ocurrido un problema consulta a tu administrador!",
                            icon: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        })
                        return false
                    }

                })

            }

            // SE INDERTA SI EL MODULO ES DE USER
            if (model == 101) {
                array = new Array(data.model)
                var elem = {
                    user: array[0].email,
                    password: array[0].password,
                    role: array[0].role
                }

                request.post(global.api.addUser, elem, function (res) {
                    var result = res.response.result.Database[0].Table.Row[0]
                    if (result[0].isInsert > 0 && result[0].errno == null) {
                        Swal.fire({
                            title: 'Exito!',
                            text: "Se operacion se realizo con sactifaccion!",
                            icon: 'sucess',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        })
                        setTimeout(function () {
                            location.reload()
                        }, 500)

                    } else {
                        Swal.fire({
                            title: 'Lo sentimos..?',
                            text: "Ya existe un usuario con ese correo!",
                            icon: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        })
                        return false;
                    }
                });
            }

            // SE INDERTA SI EL MODULO ES DE AULA
            if (model == 102) {
                array = new Array(data.model)
                var elem = {
                    aulaName: array[0].aulaName,
                    capacidad: array[0].capacidad,
                    gradoID: array[0].gradoID
                }
                request.post(global.api.createAula, elem, function (res) {
                    var result = res.response.result.Database[0].Table.Row[0]
                    if (result[0].isInsert > 0 && result[0].errno == null) {
                        Swal.fire({
                            title: 'Exito!',
                            text: "Se operacion se realizo con sactifaccion!",
                            icon: 'sucess',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        })
                        setTimeout(function () {
                            location.reload()
                        }, 500)

                    } else {
                        Swal.fire({
                            title: 'Lo sentimos..?',
                            text: "Ya existe un aula con esta informacion en el sistema..!",
                            icon: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        })
                        return false;
                    }
                })
            }

        }
        this.update = function () {
        }
        this.delete = function () {
        }


    }
}
