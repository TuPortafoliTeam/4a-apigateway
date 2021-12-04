//Se importan los typeDef de cada submodulo
const proyectosTypeDefs = require('./proyecto_typeDef')

//Se agregan los typeDefs importados para exportarlos
const schemasArrays = [proyectosTypeDefs];

//Se exportan
module.exports = schemasArrays;
