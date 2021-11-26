import { CentroEducativoI } from "./CentroEducativo.Interface";

export interface DocenteI{
    idDocente?: number,
    centroEducativo?: CentroEducativoI,
    nombreCompleto?:string,
    direccion?: string,
    telefono?: number,
    escolaridad?: string
}  