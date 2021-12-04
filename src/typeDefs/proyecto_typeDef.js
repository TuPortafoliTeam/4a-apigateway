const { gql } = require('apollo-server');

const proyectosTypeDefs = gql`
    type Tecnologia {
        nombre: String!
        version: String
    }
    type Duracion {
        inicio: String!
        fin: String
    }
    type Enlaces {
        Enlace: String!
    } 
    input Proyecto {
        _id: String!
        nombreProyecto: String!
        tecnologiasUsadas: [Tecnologia!]!
        tematica: String!
        duracion: Duracion!
        descripcionProyecto: String!
        enlaces: [Enlaces!]!
        usuario: String!
    }
    input inputProyecto {
        nombreProyecto: String!
        tecnologiasUsadas: [Tecnologia!]!
        tematica: String!
        duracion: Duracion!
        descripcionProyecto: String!
        enlaces: [Enlaces!]!
        usuario: String!
    }
    extend type Query {
        getAllProyects():[Proyecto]
        getProyectsById(idProyecto: String!): Proyecto
    }
    extend type Mutation{
        createProyect(proyecto: inputProyecto!): Proyecto
        putProyectsById(idProyecto: String!): Proyecto
        deleteProyectsById(idProyecto: String!): Proyecto

    }
`;

module.exports=proyectosTypeDefs;