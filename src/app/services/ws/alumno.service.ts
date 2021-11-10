import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaVehiculosI } from '../../models/listavehiculos.interface';
import { VehiculoI } from 'src/app/models/vehiculo.interface';
import { AlumnoI } from '../../models/Alumno.Interface';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url:string = "http://desktop-5rs54an:8080/Servicio/webresources/Alumno/";
constructor(private http:HttpClient){}

 getAllAlumnos():Observable<AlumnoI[]>{
  let direccion = this.url + "listar";
  return this.http.get<AlumnoI[]>(direccion);
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
 postVehiculo(form:VehiculoI):Observable<VehiculoI>{
  let direccion = this.url + "insertar";
  console.log(direccion);
  return this.http.put<VehiculoI>(direccion, form);
 }

///End crud vehiculo

}
