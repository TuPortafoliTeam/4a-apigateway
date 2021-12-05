const userResolver = require("./user_resolver");
const userResolver = require("./cover_resolver");
const lodash = require("lodash");

//Se importan los resolvers de cada submodulo

//Se agregan los resolver importados para exportarlos
const resolvers = lodash.merge(userResolver, coverResolver);

module.exports = resolvers;
