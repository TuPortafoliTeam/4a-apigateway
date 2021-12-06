//Se importan los typeDef de cada submodulo
const userTypeDefs = require("./user_type_defs");
const coverTypeDef = require("./cover_type_def");
//Se agregan los typeDefs importados para exportarlos
const schemasArrays = [userTypeDefs, coverTypeDef];

//Se exportan
module.exports = schemasArrays;
