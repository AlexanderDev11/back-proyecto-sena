import { CultivoModel } from "./cultivo.js";

const resolversCultivo = {
  Query: {
    Cultivos: async (parent, args) => {
      const cultivos = await CultivoModel.find()
        .populate("reportes")
        .populate("clientes");
      return cultivos;
    },
  },
  Mutation: {
    crearCultivo: async (parent, args) => {
      const cultivoCreado = await CultivoModel.create({
        nombre: args.nombre,
        descripcion: args.descripcion,
        precio: args.precio,
        hectarea: args.hectarea,
        fechaRegistro: args.fechaRegistro,
        fechaVencimiento: args.fechaVencimiento,
        estado: args.estado,
        tipoCultivo: args.tipoCultivo,
        tipoPlanta: args.tipoPlanta,
        proveedor: args.proveedor,
        licencias: args.licencias,
      });
      return cultivoCreado;
    },
  },
};

export { resolversCultivo };
