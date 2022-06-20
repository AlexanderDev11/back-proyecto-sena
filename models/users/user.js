import mongoose from "mongoose";
/* import { Enum_Rol, Enum_EstadoUsuario } from "../enums/enums.js"; */

const { Schema, model } = mongoose;

/* interface User {
  correo: string;
  password: string;
  nombre: string;
  apellido: string;
  identificacion: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
} */

const userSchema = new Schema({
  correo: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "El formato del correo electronico es incorrecto.",
    },
  },
  password: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ["ADMINISTRADOR", "PROVEEDOR", "CLIENTE"],
  },
  estado: {
    type: String,
    enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
    default: "PENDIENTE",
  },
});

const UserModel = model("User", userSchema);

export { UserModel };
