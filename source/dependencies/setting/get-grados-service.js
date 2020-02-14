function getGrado() {
    this.get = function () {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("getGrados").get([], (data, err) => {
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
   mvc.dependencies.getGrado = new getGrado();