const { gql } = require("apollo-server");

const coverTypeDef = gql`
  type Cover {
    idCover: Int!
    idUsuario: Int!
    trabajo: String
    contenido: String
  }

  input CoverInput {
    idCover: Int!
    idUsuario: Int!
    trabajo: String
    contenido: String
  }

  type Query {
    coverByIdCover(idCover: Int!): Cover
  }

  extend type Mutation {
    createCover(coverletter: CoverInput!): Cover
  }
`;

module.exports = coverTypeDef;
