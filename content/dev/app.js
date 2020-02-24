let { url, binder, request, view, cookie, route } = plugdo;
window.global = {
    api: {
       getUser:"/api/get/check/json",
       addRole:"/api/add/role/json",
       checkPermisos:"/api/check/permisos/json",
       getRole:"/api/get/role/json",
       addUser:"/api/add/user/json",
       getGrados:"/api/get/grados/json",
       createAula:"/api/add/Aula/json",
       createClass:"/api/add/Clases/json",
       uploadImg:"/api/upload/images/json"
    },
    var:{
        name:""
    }
}
