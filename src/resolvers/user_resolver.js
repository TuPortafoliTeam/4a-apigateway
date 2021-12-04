const userResolver = {
    Query: {
        userByIdUsuario: async (_, {idUsuario}, { dataSources,idUsuarioToken}) => {
            console.log(idUsuario, idUsuarioToken)
            if(idUsuario == idUsuarioToken){
                return await dataSources.accountAPI.userByIdUsuario(idUsuario);
            }else{
                return null
            }
        }
    }
}

module.exports = userResolver;