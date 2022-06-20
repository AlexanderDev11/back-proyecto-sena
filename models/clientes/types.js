import { gql } from "apollo-server-express";

const typeCliente = gql`
  type Cliente {
    _id: ID!
    fechaIngreso: Date
    fechaEgreso: Date
    cultivo: Cultivo!
    cliente: Usuario!
    estado: Enum_EstadoCliente!
  }

  type Query {
    Clientes: [Cliente]
  }

  type Mutation {
    crearCliente(
      cultivo: String!
      cliente: String!
      estado: Enum_EstadoCliente!
    ): Cliente

    aprobarCliente(id: String!): Cliente
  }
`;

export { typeCliente };
