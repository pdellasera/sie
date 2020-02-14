var connectionString = global.settings.db;

//***************************************//
// ------ COLLECTOR INSERTA CLUB -------//
//*************************************//

plugdo.collector("addRole", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_AddRole",
  parameter: ["json:roleName","json:permisos"]
});

plugdo.collector("checkPermisos", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_CheckPermisosBySysUser",
  parameter: ["json:sessionID"]
});

plugdo.collector("getRole", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_GetRole",
  parameter: []
});

plugdo.collector("addUser", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_AddUser",
  parameter: ['json:user','json:password','json:role']
});

plugdo.collector("getGrados", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_GetGrados",
  parameter: []
});

plugdo.collector("addAula", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_AddAula",
  parameter: ['json:aulaName','json:capacidad','json:gradoID']
});