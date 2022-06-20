import { gql } from "apollo-server-express";
import { typeEnums } from "../models/enums/types.js";
import { typeCultivo } from "../models/cultivos/types.js";
import { typeUsers } from "../models/users/types.js";
import { typeReporte } from "../models/reportes/types.js";
import { typeCliente } from "../models/clientes/types.js";
import { typeAutenticacion } from "./auth/types.js";

const typeGlobal = gql`
  scalar Date
`;

export const types = [
  typeGlobal,
  typeEnums,
  typeUsers,
  typeCultivo,
  typeReporte,
  typeCliente,
  typeAutenticacion,
];
