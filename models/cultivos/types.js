import { gql } from "apollo-server-express";

const typeCultivo = gql`
  type Licencia {
    _id: ID!
    descripcion: String!
    tipo: Enum_Licencia!
  }

  input crearLicencia {
    descripcion: String!
    tipo: Enum_Licencia!
  }

  type Cultivo {
    _id: ID!
    nombre: String!
    descripcion: String!
    precio: Float!
    hectarea: Float!
    fechaRegistro: Date!
    fechaVencimiento: Date!
    estado: Enum_EstadoCultivo!
    tipoCultivo: Enum_TipoCultivo!
    tipoPlanta: Enum_TipoPlanta!
    proveedor: Usuario!
    licencias: [Licencia]
    reportes: [Reporte]
    clientes: [Cliente]
  }

  type Query {
    Cultivos: [Cultivo]
  }

  type Mutation {
    crearCultivo(
      nombre: String!
      descripcion: String!
      precio: Float!
      hectarea: Float!
      fechaRegistro: Date!
      fechaVencimiento: Date!
      estado: Enum_EstadoCultivo!
      tipoCultivo: Enum_TipoCultivo!
      tipoPlanta: Enum_TipoPlanta!
      proveedor: String!
      licencias: [crearLicencia]
    ): Cultivo
  }
`;

export { typeCultivo };
