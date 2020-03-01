function getAllStudents() {
    this.get = function () {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("getAllAlumnos").get({}, (data, err) => {
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
mvc.dependencies.getAllStudents = new getAllStudents();