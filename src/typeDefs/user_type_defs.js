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

  type DataLogin {
    id: Int!
    token: String!
  }

  type Access {
    exitoso: String!
    mensajeError: String
    body: DataLogin!
  }

  input CredentialsInput {
    correo: String!
    contrasena: String!
  }

  type RegistUser {
    exitoso: String!
    mensajeError: String
    body: Int
  }

  type Formacion {
    institucion: String!
    anio: String!
    materia: String!
  }
  input FormacionInput {
    institucion: String!
    anio: String!
    materia: String!
  }

  type Trabajo {
    empresa: String!
    cargo: String!
    funciones: [String!]!
  }
  input TrabajoInput {
    empresa: String!
    cargo: String!
    funciones: [String!]!
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
    descripcion: String
    metodologia: String
    formacion: [Formacion!]!
    trabajo: [Trabajo!]!
    intereses: String
  }

  input PerfilInput {
    usuario: Int!
    descripcion: String
    metodologia: String
    formacion: [FormacionInput!]!
    trabajo: [TrabajoInput!]!
    intereses: String
  }

  input UserUpdateInput {
    user: UserInput!
    profile: PerfilInput!
    id: Int!
  }

  type UserProfile {
    user: UserDetail!
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
