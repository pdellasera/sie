function insertRole() {
    this.add = function (date) {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("addRole").get(date, (data, err) => {
                if (err !== undefined) {
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
   mvc.dependencies.insertRole = new insertRole();