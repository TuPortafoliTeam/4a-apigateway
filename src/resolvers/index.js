//Se importan los resolvers de cada submodulo
const coverResolver = require("./cover_resolver");
const lodash = require("lodash");
const userResolver = require("./user_resolver");
const proyectoResolver = require("./proyecto_resolver");

//Se agregan los resolver importados para exportarlos
const resolvers = lodash.merge(userResolver, coverResolver, proyectoResolver);

module.exports = resolvers;
