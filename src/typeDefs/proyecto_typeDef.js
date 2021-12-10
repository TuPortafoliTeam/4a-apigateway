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
    enlace: String!
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
    enlace: String!
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
  type deleteMessage {
    message: String
  }
  type Query {
    getProyectById(idProyecto: String!): Proyecto
    getAllProyects: [Proyecto]
  }
  type Mutation {
    createProyect(proyecto: inputProyecto!): Proyecto
    putProyectById(idProyecto: String!, proyecto: inputProyecto!): Proyecto
    deleteProyectById(idProyecto: String!): deleteMessage
  }
`;

module.exports = proyectosTypeDefs;
