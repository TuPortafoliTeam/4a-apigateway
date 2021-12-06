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
    body: String!
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

  type Perfil {
    usuario: Int!
    descripcion: String!
    metodologia: String
    formacion: [Formacion!]
    trabajo: Trabajo
    intereses: String
  }

  type Formacion {
    institucion: String!
    anio: String!
    materia: String!
  }

  type Trabajo {
    empresa: String!
    cargo: String!
    funciones: [String!]!
  }

  input UserUpdateInput {
    user: UserInput!
    profile: Perfil!
    id: Int!
  }

  type UserProfile {
    user: UserInput!
    profile: Perfil!
  }

  type Mutation {
    registUser(user: UserInput!): RegistUser!
    login(credentials: CredentialsInput!): Access!
    updateUser(user: UserUpdateInput!): UserProfile!
  }

  type Query {
    userDetail(userId: Int!): UserProfile!
  }
`;

module.exports = userTypeDefs;