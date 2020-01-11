const node = require("plugdo-node").node();
const path = require("path");
const expressLocale = require("express-locale");
const lang = require("./lang/languages");
var cookieParser = require('cookie-parser')
const globalPath = process.env.PLUGDO_GLOBAL_PATH || "./source/app.config.js";
global.settings = require(globalPath).settings()[process.env.PLUGDO_GLOBAL_ENV || 'dev'];
const port = process.env.PORT === undefined ? 3000 : process.env.PORT;

var location = "";

// global.config = {
//     lang: lang.get(),
//     location: location,
//     mongo: {
//         connection: "mongodb://root:UIp0MMKLPLxP@ec2-3-16-26-62.us-east-2.compute.amazonaws.com:27017",
//         dbSession: "fitwavesession"
//     },
//     session: {
//         expireAfterMinutes: 60,
//         secret: "-9652//*123dvtfae56781"
//     },
//     email: {
//         activation: "http://dev.fitwave507.com/" + location,
//         resetPassword: "http://dev.fitwave507.com/" + location + "reset-password",
//         host: "smtp.gmail.com", // hostname
//         from: "Info@fitwave507.com",
//         port: 465,
//         user: "Info@fitwave507.com",
//         pass: "TeamElite507"
//     }
// };
mvc.middlewareBefore.push(cookieParser());
mvc.middlewareBefore.push(expressLocale({
    "priority": ["cookie", "accept-language", "default"],
    "default": "es_EU"
}));
const myDatabaseConnector = require("mysql-connector-plugdo-js/mysql");
node.registerConnector("db", "mysql", myDatabaseConnector.mysql());
node.mvc.webserver.use(require("./upload/upload-images"));
node.start(port, path.resolve(__dirname));