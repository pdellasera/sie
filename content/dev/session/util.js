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
                        }).then((result) => {
                            if (result.value) {
                                location.reload()
                            }
                        })
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
                        }).then((result) => {
                            if (result.value) {
                                location.reload()
                            }
                        })
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
                        }).then((result) => {
                            if (result.value) {
                                location.reload()
                            }
                        })

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

            // SE INSERTA SI EL MODULO ES DE CLASES
            if (model == 103) {
                array = new Array(data.model)
                var elem = {
                    claseName: array[0].claseName
                }

                request.post(global.api.createClass, elem, function (res) {
                    var result = res.response.result.Database[0].Table.Row[0]
                    if (result[0].errno == 101) {
                        Swal.fire({
                            title: 'Lo sentimos..?',
                            text: "Ya existe una Clase con esta nombre en el sistema..!",
                            icon: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        }).then((result) => {
                            if (result.value) {
                                location.reload()
                            }
                        })
                    }

                    if (result[0].errno > 0 && result[0].errno != 101) {
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

                    if (result[0].isInsert > 0 && result[0].errno == null) {
                        Swal.fire({
                            title: 'Exito!',
                            text: "Se operacion se realizo con sactifaccion!",
                            icon: 'sucess',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK!'
                        }).then((result) => {
                            if (result.value) {
                                location.reload()
                            }
                        })
                    }
                })
            }

            if (model == 104) {
                array = new Array(data.model)
                console.log(array)
            }

            if (model == 1) {
                var array = new Array(data.model)
                var elem = {
                    nombre: array[0].nombre,
                    apellido: array[0].apellido,
                    cedula: array[0].cedula,
                    email: array[0].email,
                    gradoID: array[0].grado,
                    sexo: array[0].sexo,
                    bloodType: array[0].bloodType,
                    birthDate: array[0].birthDate,
                    parentType: array[0].parentType,
                    parentName: array[0].parentName,
                    parentPhone: array[0].parentPhone,
                    address: array[0].address,
                    img: "https://p1.hiclipart.com/preview/227/359/624/education-icon-avatar-student-share-icon-user-user-profile-education-purple-png-clipart.jpg"
                }
                request.post(global.api.addAlumno, elem, function (res) {
                    var isInsert = res.response.result.Database[0].Table.Row[0][0].isInsert
                    if(isInsert > 0){
                        Swal.fire({
                            title: "Se a registrado con exito al nuevo almno",
                            icon: 'success',
                            showCancelButton: true,
                            confirmButtonText: 'ok'
                          }).then((result) => {
                            if (result.value) {
                              location.reload()
                            }
                          })
                    }else{
                        Swal.fire({
                            title: "Lo sentimos pero ya existe un alumno registrado con el numero de cedula" + `"${array[0].cedula}"`,
                            icon: 'error',
                            showCancelButton: true,
                            confirmButtonText: 'ok'
                          }).then((result) => {
                            if (result.value) {
                              return false;
                            }else{
                                location.reload()
                            }
                          })
                    }
                    //console.log(res)
                })
            }

        }
        this.update = function () {
        }
        this.delete = function () {
        }

        this.checkData = function () {

        }

    }
}
