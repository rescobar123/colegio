import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocenteI } from '../../models/Docente.Interface';
import { AlertI } from '../../models/comunes/AlertI';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private url:string = "http://192.168.0.8:9090/backendColegio/WS/recursos/"; //192.168.0.8
constructor(private http:HttpClient){}


//Crud docentes
 getAllDocentes():Observable<DocenteI[]>{
  let direccion = this.url + "docentes";
  return this.http.get<DocenteI[]>(direccion);
 }

 postDocente(form:DocenteI):Observable<AlertI>{
  let direccion = this.url + "nuevoDocente";
  return this.http.put<AlertI>(direccion, form);
 }


}
