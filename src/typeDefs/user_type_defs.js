const { gql } = require("apollo-server");

const userTypeDefs = gql`
  type UserDetail {
    idUsuario: Int!
    tipoDocIdentidad: String!
    numeroDocumento: String!
    nombre: String!
    correo: String!
    telefono: String!
    contrasena: String
    idTipoEntidad: Int!
  }

  type Access {
    exitoso: String!
    mensajeError: String
    body: UserDetail
  }

  input CredentialsInput {
    correo: String!
    contrasena: String!
  }

  type RegistUser {
    exitoso: String!
    mensajeError: String
    body: String
  }

  input UserInput {
    idUsuario: Int
    tipoDocIdentidad: String!
    numeroDocumento: String!
    nombre: String!
    correo: String!
    telefono: String!
    contrasena: String!
    idTipoEntidad: Int!
  }

  type UserRU {
    exitoso: String!
    mensajeError: String
    body: UserDetail
  }

  type Mutation {
    registUser(user: UserInput!): RegistUser!
    login(credentials: CredentialsInput!): Access!
    updateUser(user: UserInput!): UserRU!
  }

  type Query {
    userDetail(userId: Int!): UserRU!
  }
`;

module.exports = userTypeDefs;
