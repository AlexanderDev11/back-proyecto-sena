import { gql } from "apollo-server-express";

const typeReporte = gql`
  type Reporte {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    cultivo: Cultivo!
    creadoPor: Usuario!
  }

  type Query {
    Reportes: [Reporte]
    filtrarReporte(_id: String!): [Reporte]
  }
  type Mutation {
    crearReporte(
      fecha: Date!
      descripcion: String!
      cultivo: String!
      creadoPor: String!
    ): Reporte
  }
`;

export { typeReporte };
