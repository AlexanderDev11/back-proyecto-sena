import mongoose from "mongoose";
/* import {
  Enum_EstadoCultivo,
  Enum_Licencia,
  Enum_TipoCultivo,
  Enum_TipoPlanta,
} from "../enums/enums.js"; 
import { LicenciaModel } from "../licencias.js";*/
import { UserModel } from "../users/user.js";

const { Schema, model } = mongoose;

/* interface Cultivo {
  nombre: string;
  descripcion: string;
  precio: number;
  hectarea: number;
  fechaRegistro: Date;
  fechaVencimiento: Date;
  estado: Enum_EstadoCultivo;
  proveedor: Schema.Types.ObjectId;
  tipoCultivo: Enum_TipoCultivo;
  tipoPlanta: Enum_TipoPlanta;
  licencias: [{ descripcion: String; tipo: Enum_Licencia }];
} */

const cultivoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    hectarea: {
      type: Number,
      required: true,
    },
    fechaRegistro: {
      type: Date,
      required: true,
    },
    fechaVencimiento: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      enum: ["DISPONIBLE", "NO_DISPONIBLE"],
      default: "NO_DISPONIBLE",
    },
    proveedor: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: UserModel,
    },
    tipoCultivo: {
      type: String,
      enum: ["INTERIOR", "EXTERIOR", "INVERNADERO"],
    },
    tipoPlanta: {
      type: String,
      enum: [
        "CANNABIS_SATIVA",
        "CANNABIS_INDICA",
        "CANNABIS_RUDERALIS",
        "HIBRIDO",
        "CANAMO",
      ],
    },
    licencias: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          enum: [
            "NINGUNA",
            "SEMILLAS_CULTIVO",
            "CULTIVO_PSICOACTIVO",
            "CULTIVO_NO_PSICOACTIVO",
            "PRODUCTO_DERIVADO",
          ],
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

cultivoSchema.virtual("reportes", {
  ref: "Reporte",
  localField: "_id",
  foreignField: "cultivo",
});

cultivoSchema.virtual("clientes", {
  ref: "Cliente",
  localField: "_id",
  foreignField: "cultivo",
});

const CultivoModel = model("Cultivo", cultivoSchema);

export { CultivoModel };
