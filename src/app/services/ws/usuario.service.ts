import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocenteI } from '../../models/Docente.Interface';
import { AlertI } from '../../models/comunes/AlertI';
import { UsuarioI } from '../../models/Usuario.Interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = "http://192.168.0.8:9090/backendColegio/WS/Usuario/"; //192.168.0.8
  constructor(private http:HttpClient){

  }

//Login Usuario
 postLogin(form:UsuarioI):Observable<AlertI>{
  let direccion = this.url + "login";
  return this.http.put<AlertI>(direccion, form);
 }

}