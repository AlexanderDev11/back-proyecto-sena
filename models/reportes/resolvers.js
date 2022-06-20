import { ReporteModel } from "./reportes.js";

const resolversReporte = {
  Query: {
    Reportes: async (parent, args) => {
      const reportes = await ReporteModel.find()
        .populate("cultivo")
        .populate("creadoPor");
      return reportes;
    },
    filtrarReporte: async (parent, args) => {
      const reporteFiltrado = await ReporteModel.find({
        cultivo: args._id,
      })
        .populate("cultivo")
        .populate("creadoPor");
      return reporteFiltrado;
    },
  },
  Mutation: {
    crearReporte: async (parent, args) => {
      const reporteCreado = ReporteModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        cultivo: args.cultivo,
        creadoPor: args.creadoPor,
      });
      return reporteCreado;
    },
  },
};

export { resolversReporte };
