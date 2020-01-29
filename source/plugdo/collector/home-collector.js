var connectionString = global.settings.db;

//***************************************//
// ------ COLLECTOR INSERTA CLUB -------//
//*************************************//

plugdo.collector("userisGood", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_UserExist",
  parameter: ["json:user","json:password"]
});
