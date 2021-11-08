import { VehiculoI } from 'src/app/modelos/vehiculo.interface';
import { Propietario } from './propietario.interface';
export interface ListaAllPropiedadesI{
    vehiculo: VehiculoI;
    propietario: Propietario
};