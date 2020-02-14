function insertAulas() {
    this.add = function (date) {
        return new Promise((resolve) => {
            let response = {};
            plugdo.collect("addAula").get(date, (data, err) => {
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
   mvc.dependencies.insertAulas = new insertAulas();