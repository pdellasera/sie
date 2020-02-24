function addClass() {
    this.add = function (date) {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("addClase").get(date, (data, err) => {
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
   mvc.dependencies.addClass = new addClass();