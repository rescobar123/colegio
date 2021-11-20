import { AlumnoI } from "./Alumno.Interface";
import { CentroEducativoI } from "./CentroEducativo.Interface";
import { GradoI } from './Grado.Interface';

export interface InscripcionI{
    idInscripcion?: number,
    idCentroEducativo?: CentroEducativoI,
    idAlumno?:AlumnoI,
    idGrado?: GradoI,
    anioEScolar?: number,
    fechaInscripcion?: string
}  