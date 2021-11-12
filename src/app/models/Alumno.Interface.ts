import { CentroEducativoI } from "./CentroEducativo.Interface";

export interface AlumnoI{
    idAlumno?: string,
    centroEducativo: CentroEducativoI,
    codigoAlumno:string,
    nombres: string,
    apellidos: string,
    direccion: string,
    celular: number,
    estado:number,
    observacion: string,
    fechaCreacion: string
}  