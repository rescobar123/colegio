import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoI } from '../../models/Alumno.Interface';
import { InscripcionI } from '../../models/Inscripcion.Interface';
import { AlertI } from '../../models/comunes/AlertI';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private url:string = "http://192.168.0.8:9090/backendColegio/WS/Alumno/"; //192.168.0.8
constructor(private http:HttpClient){}

 getAllAlumnos(opcion:number):Observable<AlumnoI[]>{
  let headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    
  });
  console.log( headers);
  let direccion = this.url + "listar";
  return this.http.get<AlumnoI[]>(direccion, {headers});
 }

 postAlumno(form:AlumnoI):Observable<AlertI>{
  let direccion = this.url + "insertar";
  console.log(direccion);
  return this.http.put<AlertI>(direccion, form);
 }

 getAlumnoById(idAlumno:String):Observable<AlumnoI>{
  let direccion = this.url + idAlumno;
  return this.http.get<AlumnoI>(direccion);
 }

 //Inscripcion Alumno
 postInscripcion(form:InscripcionI):Observable<InscripcionI>{
  let direccion = this.url + "insertar";
  console.log(direccion);
  return this.http.put<InscripcionI>(direccion, form);
 }

 //Crud Alumno
 /*
 getSiglePacient(id: number):Observable<AlumnoI>{
    let direccion = this.url + id;
    return this.http.get<AlumnoI>(direccion);
 }
 putVehiculo(form:VehiculoI):Observable<VehiculoI>{
    let direccion = this.url+ "actualizar";
    return this.http.put<VehiculoI>(direccion, form);
 }
*/
 /*deleteVehiculo (form:VehiculoI):Observable<VehiculoI>{
   let direccion = this.url + "delete";
   return this.http.put<VehiculoI>(direccion, form);
 }*/
 

///End crud vehiculo

}
