const { gql } = require('apollo-server'); 

const coverTypeDef = gql`
    type Cover {
        idCover = Int!
        idUsuario = Int!
        trabajo = String
        contenido = String
    }

    type Query {
        coverByIdUser(idUsuario: Int!): Cover
        coverByIdCover(idCover: Int!): Cover
    }

    extend type Mutation {
        createCover(coverletter: Cover!): Cover
    }
`;

module.exports = coverTypeDef;