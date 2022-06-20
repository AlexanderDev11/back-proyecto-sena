/* import { Schema, model } from "mongoose";
import { CultivoModel } from "./cultivos/cultivo.js";
import { Enum_Licencia } from "./enums/enums.js";

 interface Licencias{
  descripcion: String;
  tipo: Enum_Licencia;
} 

const licenciaSchema = new Schema<Licencias>({
  descripcion:{
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: Enum_Licencia,
    required: true,
  },
});

const LicenciaModel = model("Licencia", licenciaSchema);

export {LicenciaModel}; */