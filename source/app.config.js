
const setting = {
    dev: {
      db: {
        // user: "fitwave",
        // password: "fitwaveplugdo2020",
        // host: "fitwave-dev.czisjst5vn7k.us-east-2.rds.amazonaws.com",
        // database: "fitwave"
        user: "b19b576e028a7e",
        password: "99211df7a6483d3",
        host: "us-cdbr-iron-east-04.cleardb.net",
        database: "heroku_9fe16d0083b8059"
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