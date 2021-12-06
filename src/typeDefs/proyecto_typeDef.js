const { gql } = require("apollo-server");

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
  input TecnologiaInput {
    nombre: String!
    version: String
  }
  input DuracionInput {
    inicio: String!
    fin: String
  }
  input EnlacesInput {
    Enlace: String!
  }
  type Proyecto {
    _id: String!
    nombreProyecto: String!
    tecnologiasUsadas: [Tecnologia!]
    tematica: String!
    duracion: Duracion
    descripcionProyecto: String!
    enlaces: [Enlaces!]
    usuario: String!
  }
  input inputProyecto {
    nombreProyecto: String!
    tecnologiasUsadas: [TecnologiaInput!]!
    tematica: String!
    duracion: DuracionInput!
    descripcionProyecto: String!
    enlaces: [EnlacesInput!]!
    usuario: String!
  }
  type Query {
    getProyectById(idProyecto: String!): Proyecto
  }
  type Mutation {
    createProyect(proyecto: inputProyecto!): Proyecto
    putProyectById(idProyecto: String!, proyecto: inputProyecto!): Proyecto
    deleteProyectById(idProyecto: String!): Proyecto
  }
`;

module.exports = proyectosTypeDefs;
