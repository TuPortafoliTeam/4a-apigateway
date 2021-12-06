const proyectoResolver = {
    Query: {
        getAllProyects: async(_, { dataSources }) => {
            return await dataSources.PortafoliosAPI.getAllProyects();

        },
        getProyectsById: async(_, { idProyecto }, {dataSources}) =>{
            return await dataSources.PortafoliosAPI.getProyectsById(idProyecto);
        }
    },
    Mutation: {
        createProyect:  async(_, { proyecto }, { dataSources }) => {
            return await dataSources.PortafoliosAPI.createProyect(proyecto);
        },
        putProyectById: async(_, {idProyecto, proyecto}, { dataSources })=> {
            return await dataSources.PortafoliosAPI.putProyectById(idProyecto, proyecto)
        },
        deleteProyectsById: async(_, { idProyecto }, {dataSources}) =>{
            return await dataSources.PortafoliosAPI.deleteProyectsById(idProyecto);
        }
    }
}

module.exports = proyectoResolver;