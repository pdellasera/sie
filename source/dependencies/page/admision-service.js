function insertAlumnos() {
    this.add = function (date) {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("addAlumno").get(date, (data, err) => {
                if (err) {
                    resolve(err)
                }
                else {
                    response.result = data
                    //console.log(response.result)
                    resolve(response)
                }
            });
        })
    }
}
mvc.dependencies.insertAlumnos = new insertAlumnos();