import { gql } from "apollo-server-express";

const typeEnums = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ADMINISTRADOR
    PROVEEDOR
    CLIENTE
  }

  enum Enum_EstadoCultivo {
    DISPONIBLE
    NO_DISPONIBLE
  }

  enum Enum_TipoPlanta {
    CANNABIS_SATIVA
    CANNABIS_INDICA
    CANNABIS_RUDERALIS
    HIBRIDO
    CANAMO
  }

  enum Enum_TipoCultivo {
    INTERIOR
    EXTERIOR
    INVERNADERO
  }

  enum Enum_Licencia {
    NINGUNA
    SEMILLAS_CULTIVO
    CULTIVO_PSICOACTIVO
    CULTIVO_NO_PSICOACTIVO
    PRODUCTO_DERIVADO
  }

  enum Enum_EstadoCliente {
    ACTIVO
    INACTIVO
  }
`;

export { typeEnums };
