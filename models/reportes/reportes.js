import mongoose from "mongoose";
import { CultivoModel } from "../cultivos/cultivo.js";
import { UserModel } from "../users/user.js";

const { Schema, model } = mongoose;

/* interface Reportes {
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  cultivo: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId;
} */

const reporteSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  cultivo: {
    type: Schema.Types.ObjectId,
    ref: CultivoModel,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const ReporteModel = model("Reporte", reporteSchema);

export { ReporteModel };
