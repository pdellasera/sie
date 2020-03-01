var connectionString = global.settings.db;

//***************************************//
// ------ COLLECTOR INSERTA CLUB -------//
//*************************************//

plugdo.collector("addAlumno", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_AddNewAlumno",
  parameter: ["json:nombre","json:apellido","json:cedula","json:email","json:gradoID","json:sexo","json:bloodType","json:birthDate","json:parentType","json:parentName","json:parentPhone","json:address","json:img"]
});

plugdo.collector("getAllAlumnos", {
  type: "db",
  action: "mysql",
  server: connectionString,
  queryType: "stored-procedure",
  query: "CALL dbsp_GetAlumnos",
  parameter: []
});
