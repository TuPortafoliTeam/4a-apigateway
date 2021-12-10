const { version } = require("graphql");

const proyectoResolver = {
  Query: {
    getProyectById: async (_, { idProyecto }, { dataSources }) => {
      let ans = {};
      ans = JSON.parse(
        JSON.stringify(await dataSources.portafoliosAPI.getProyectById(idProyecto)));
      ans.tecnologiasUsadas = JSON.parse(ans.tecnologiasUsadas);
      ans.duracion = JSON.parse(ans.duracion);
      ans.enlaces = JSON.parse(ans.enlaces);
      return ans
    },
    getAllProyects: async (_, {}, { dataSources }) => {
      let lis = await dataSources.portafoliosAPI.getAllProyects();
      for ( let ele in lis) {
        lis[ele] = JSON.parse(JSON.stringify(lis[ele]));
        lis[ele].tecnologiasUsadas = JSON.parse(lis[ele].tecnologiasUsadas);
        lis[ele].duracion = JSON.parse(lis[ele].duracion);
        lis[ele].enlaces = JSON.parse(lis[ele].enlaces);
      }
      return lis
    }
  },
  Mutation: {
    createProyect: async (_, { proyecto }, { dataSources }) => {
      let ans = {};
      ans = JSON.parse(
        JSON.stringify(await dataSources.portafoliosAPI.createProyect(proyecto)));
      ans.tecnologiasUsadas = JSON.parse(ans.tecnologiasUsadas);
      ans.duracion = JSON.parse(ans.duracion);
      ans.enlaces = JSON.parse(ans.enlaces);
      return ans
    },
    putProyectById: async (_, { idProyecto, proyecto }, { dataSources }) => {
      let ans = {};
      ans = JSON.parse(
        JSON.stringify(await dataSources.portafoliosAPI.putProyectById(
          idProyecto,
          proyecto
        )));
      ans.tecnologiasUsadas = JSON.parse(ans.tecnologiasUsadas);
      ans.duracion = JSON.parse(ans.duracion);
      ans.enlaces = JSON.parse(ans.enlaces);
      return ans;
    },
    deleteProyectById: async (_, { idProyecto }, { dataSources }) => {
      return await dataSources.portafoliosAPI.deleteProyectById(idProyecto);
    },
  },
};

module.exports = proyectoResolver;
