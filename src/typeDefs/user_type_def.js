const { gql } = require('apollo-server');

const userTypeDef = gql`
    type User {
        idUsuario: Int!
        tipoDocIdentidad: String!
        numeroDocumento: String!
        nombre:String!
        correo:String!
        telefono:String!
        contrasena:String!
        tipoEntidad:String!
    }

    type Query {
        userByIdUsuario(idUsuario: Int!): User!
    }
 
`;

module.exports = userTypeDef;
