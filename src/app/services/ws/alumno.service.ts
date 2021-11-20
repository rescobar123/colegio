import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaVehiculosI } from '../../models/listavehiculos.interface';
import { VehiculoI } from 'src/app/models/vehiculo.interface';
import { AlumnoI } from '../../models/Alumno.Interface';
import { InscripcionI } from '../../models/Inscripcion.Interface';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url:string = "http://192.168.0.8:8080/backendColegio/WS/Alumno/"; //192.168.0.8
constructor(private http:HttpClient){}

 getAllAlumnos():Observable<AlumnoI[]>{
  let direccion = this.url + "listar";
  return this.http.get<AlumnoI[]>(direccion);
 }

 postAlumno(form:AlumnoI):Observable<AlumnoI>{
  let direccion = this.url + "insertar";
  console.log(direccion);
  return this.http.put<AlumnoI>(direccion, form);
 }

 //Inscripcion Alumno
 postInscripcion(form:InscripcionI):Observable<InscripcionI>{
  let direccion = this.url + "insertar";
  console.log(direccion);
  return this.http.put<InscripcionI>(direccion, form);
 }

 //Crud Alumno
 getSiglePacient(id: number):Observable<AlumnoI>{
    let direccion = this.url + id;
    return this.http.get<AlumnoI>(direccion);
 }
 putVehiculo(form:VehiculoI):Observable<VehiculoI>{
    let direccion = this.url+ "actualizar";
    return this.http.put<VehiculoI>(direccion, form);
 }

 deleteVehiculo (form:VehiculoI):Observable<VehiculoI>{
   let direccion = this.url + "delete";
   return this.http.put<VehiculoI>(direccion, form);
 }
 

///End crud vehiculo

}
