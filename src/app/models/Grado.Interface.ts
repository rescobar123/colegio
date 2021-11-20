import { CentroEducativoI } from "./CentroEducativo.Interface";

export interface GradoI{
    idGrado?: number,
    centroEducativo?:CentroEducativoI
    nombre?:string,
    nivel?: string,
}