//Se importan los typeDef de cada submodulo
const userTypeDefs = require("./user_type_defs");

//Se agregan los typeDefs importados para exportarlos
const schemasArrays = [userTypeDefs];

//Se exportan
module.exports = schemasArrays;
