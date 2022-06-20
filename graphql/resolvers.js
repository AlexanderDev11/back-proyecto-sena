import { resolversCultivo } from "../models/cultivos/resolvers.js";
import { resolversUser } from "../models/users/resolvers.js";
import { resolversReporte } from "../models/reportes/resolvers.js";
import { resolversCliente } from "../models/clientes/resolvers.js";
import { resolversAutenticacion } from "./auth/resolvers.js";

export const resolvers = [
  resolversUser,
  resolversCultivo,
  resolversReporte,
  resolversCliente,
  resolversAutenticacion,
];
