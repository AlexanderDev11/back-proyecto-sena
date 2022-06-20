import { ClienteModel } from "./cliente.js";

const resolversCliente = {
  Query: {
    Clientes: async (parent, args) => {
      const clientes = await ClienteModel.find();
      return clientes;
    },
  },
  Mutation: {
    crearCliente: async (parent, args) => {
      const clienteCreado = await ClienteModel.create({
        cultivo: args.cultivo,
        cliente: args.cliente,
        estado: args.estado,
      });
      return clienteCreado;
    },
    aprobarCliente: async (parent, args) => {
      const clienteAprobado = await ClienteModel.findByIdAndUpdate(
        args.id,
        {
          estado: "ACTIVO",
          fechaIngreso: Date.now(),
        },
        { new: true }
      );
      return clienteAprobado;
    },
  },
};

export { resolversCliente };
