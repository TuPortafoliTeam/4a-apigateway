const proyectoResolver = {
  Query: {
    getProyectById: async (_, { idProyecto }, { dataSources }) => {
      return await dataSources.portafoliosAPI.getProyectById(idProyecto);
    },
  },
  Mutation: {
    createProyect: async (_, { proyecto }, { dataSources }) => {
      return await dataSources.portafoliosAPI.createProyect(proyecto);
    },
    putProyectById: async (_, { idProyecto, proyecto }, { dataSources }) => {
      return await dataSources.portafoliosAPI.putProyectById(
        idProyecto,
        proyecto
      );
    },
    deleteProyectById: async (_, { idProyecto }, { dataSources }) => {
      return await dataSources.portafoliosAPI.deleteProyectById(idProyecto);
    },
  },
};

module.exports = proyectoResolver;
