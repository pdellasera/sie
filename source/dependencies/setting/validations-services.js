function checkUserPermitions() {
    this.verify = function (date) {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("checkPermisos").get(date, (data, err) => {
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
   mvc.dependencies.checkUserPermitions = new checkUserPermitions();