const lodash = require("lodash");

//Se importan los resolvers de cada submodulo
const proyectoResolver = require("./proyecto_resolver")
//Se agregan los resolver importados para exportarlos
const resolvers = lodash.merge(proyectoResolver);

module.exports = resolvers;
