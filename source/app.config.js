
const setting = {
    dev: {
      db: {
        // user: "fitwave",
        // password: "fitwaveplugdo2020",
        // host: "fitwave-dev.czisjst5vn7k.us-east-2.rds.amazonaws.com",
        // database: "fitwave"
        user: "root",
        password: "",
        host: "localhost",
        database: "eduko"
      }
    }
    // ,
    // prod: {
    //   db: {
    //     user: "fitwave",
    //     password: "fitwaveplugdo2020",
    //     host: "fitwave-dev.czisjst5vn7k.us-east-2.rds.amazonaws.com",
    //     database: "fitwave"
    //   }
    // }
  
  }
  
  exports.settings = function () {
    return setting;
  };