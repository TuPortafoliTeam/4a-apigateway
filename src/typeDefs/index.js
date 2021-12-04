//Se importan los typeDef de cada submodulo

const userTypeDef = require("./user_type_def");

//Se agregan los typeDefs importados para exportarlos
const schemasArrays = [userTypeDef];

//Se exportan
module.exports = schemasArrays;
