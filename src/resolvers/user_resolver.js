const userResolver = {
    Query: {
        userByIdUsuario: async (_, {idUsuario}, { dataSources,idUsuarioToken}) => {
            console.log(idUsuario, idUsuarioToken)
            if(idUsuario == idUsuarioToken){
                return await dataSources.userAPI.userByIdUsuario(idUsuario);
            }else{
                return null
            }
        }
    },
    Mutation: {
        createUserRequest: async (_, { user }, { dataSources }) => {
            const userData = {

                idUsuario: user.idUsuario,
                tipoDocIdentidad: user.tipoDocIdentidad,
                numeroDocumento: user.numeroDocumento,
                nombre:user.nombre,
                correo:user.correo,
                telefono:user.telefono,
                contrasena:user.contrasena,
                tipoEntidad:user.tipoEntidad,
            }
           return await dataSources.userAPI.createUserRequest(userData);
        },       
    }
}

module.exports = userResolver;