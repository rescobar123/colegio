import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  public curso: string;
  public actividades;

  constructor(private activatedRoute: ActivatedRoute,  private router:Router) { }

  ngOnInit() {
    this.curso = this.activatedRoute.snapshot.paramMap.get('idCurso');
    this.actividades =  [
      { semana: 'Semana 1', title: 'Hacer tal cosa', punteo: '10', idActividad: '1', icono: 'clipboard-outline', descripcion: '', tipo: 'lectura'},
      { semana: 'Semana 1', title: 'Hacer tal Cosa', punteo: '10', idActividad: '2', icono: 'clipboard-outline' , descripcion: '', tipo: 'lectura'},
      { semana: 'Semana 1', title: 'Hacer otra cosa',punteo: '10', idActividad: '3', icono: 'clipboard-outline' , descripcion: '', tipo: 'lectura'},
      { semana: 'Semana 1', title: 'hacer una ultima cosa',punteo: '10', idActividad: '4', icono: 'clipboard-outline', descripcion: '', tipo: 'lectura'},
    ];
  }
  verActividad(idActividad:string){
    this.router.navigate(['actividad', idActividad]);
  }

  regresar(idActividad:string){
    this.router.navigate(['actividad', idActividad]);
  }
}
