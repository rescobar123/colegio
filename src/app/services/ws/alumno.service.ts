import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaVehiculosI } from '../../models/listavehiculos.interface';
import { VehiculoI } from 'src/app/models/vehiculo.interface';
import { Propietario } from 'src/app/models/propietario.interface';
import { ListaPropiedadesI } from '../../models/listapropiedades.interface';
import { ListaAllPropiedadesI } from '../../models/listaAllpropiedades.interface';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url:string = "http://desktop-5rs54an:8080/Servicio/webresources/Vehiculo/";

  private urlPropietario:string = "http://localhost:8080/Servicio/webresources/PropietarioService";

  private urlPropiedades:string = "http://localhost:8080/Servicio/webresources/PropiedadesService";
constructor(private http:HttpClient){}



 getAllVehiculos():Observable<ListaVehiculosI[]>{
  let direccion = this.url + "listar";
  return this.http.get<ListaVehiculosI[]>(direccion);
 }

 //Crud Vhieculo
 getSiglePacient(id: any):Observable<VehiculoI>{
    let direccion = this.url + id;
    return this.http.get<VehiculoI>(direccion);
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


//Propietarios
 getAllPropietarios():Observable<Propietario[]>{
  let direccion = this.urlPropietario;
  return this.http.get<Propietario[]>(direccion);
 }

 insertVehiculoPersona(idVehiculo:string, idPersona:string):Observable<VehiculoI>{
   let direccion = this.urlPropietario + "/" +idVehiculo+"/"+idPersona;
   return this.http.get<VehiculoI>(direccion);
 }

 desasociarVehiculo(idVehiculo:string, idPersona:string):Observable<VehiculoI>{
  let direccion = this.urlPropietario + "/desasociar" +idVehiculo+"/"+idPersona;
  return this.http.get<VehiculoI>(direccion);
}

 // end Propietarios


//Propiedades
 getPropiedades(propietario:string):Observable<ListaPropiedadesI[]>{
  let direccion = this.urlPropiedades + "/" + propietario;
  return this.http.get<ListaPropiedadesI[]>(direccion);
 }

 getPropiedadesALL():Observable<ListaAllPropiedadesI[]>{
  let direccion = this.urlPropiedades;
  return this.http.get<ListaAllPropiedadesI[]>(direccion);
 }

}
