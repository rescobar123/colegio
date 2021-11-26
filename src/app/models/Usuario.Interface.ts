import { CentroEducativoI } from './CentroEducativo.Interface';

export interface UsuarioI{
    idusuario?: number,
    nick?: string,
    password?: string,
    nombreCompleto?:string,
    rol?: string,
    fechaCreacion?: number,
    centroEducativo?: CentroEducativoI
}  