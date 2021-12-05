//Se importan los typeDef de cada submodulo

const userTypeDef = require("./user_type_def");
const coverTypeDef = require("./cover_type_def");
//Se agregan los typeDefs importados para exportarlos
const schemasArrays = [userTypeDef, coverTypeDef];

//Se exportan
module.exports = schemasArrays;
