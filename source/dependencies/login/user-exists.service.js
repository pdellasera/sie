function isExistsUser() {
  this.check = function (date) {
      return new Promise((resolve) => {
          let response = {};
          plugdo.collect("userisGood").get(date, (data, err) => {
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
 mvc.dependencies.isExistsUser = new isExistsUser();