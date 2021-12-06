const coverResolver = {
  Query: {
    coverByIdCover: async (_, { idCover }, { dataSources }) => {
      return await dataSources.portafoliosAPI.coverByIdCover(idCover);
    },
  },
  Mutation: {
    createCover: async (_, { coverletter }, { dataSources }) => {
      return await dataSources.portafoliosAPI.createCover(coverletter);
    },
  },
};

module.exports = coverResolver;
