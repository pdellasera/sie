function getRole() {
    this.get = function () {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("getRole").get([], (data, err) => {
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
   mvc.dependencies.getRole = new getRole();