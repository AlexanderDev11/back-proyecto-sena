import mongoose from "mongoose";
import { CultivoModel } from "../cultivos/cultivo.js";
/* import { Enum_EstadoCliente } from "../enums/enums.js"; */
import { UserModel } from "../users/user.js";

const { Schema, model } = mongoose;

/* interface Cliente {
  fechaIngreso: Date;
  fechaEgreso: Date;
  cultivo: Schema.Types.ObjectId;
  cliente: Schema.Types.ObjectId;
  estado: Enum_EstadoCliente;
} */

const clienteSchema = new Schema({
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  cultivo: {
    type: Schema.Types.ObjectId,
    ref: CultivoModel,
    required: true,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
  estado: {
    type: String,
    enum: ["ACTIVO", "INACTIVO"],
    default: "INACTIVO",
    required: true,
  },
});

const ClienteModel = model("Cliente", clienteSchema);

export { ClienteModel };
