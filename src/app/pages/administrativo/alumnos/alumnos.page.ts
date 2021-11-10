import { Component, OnInit } from '@angular/core';
import { AlumnoI } from '../../../models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  public allAlumnos:AlumnoI[]=[];
  constructor(private ws:AlumnoService) { }

  ngOnInit(): void {
    
    this.ws.getAllAlumnos().subscribe(data=>{
      this.allAlumnos = data;
      console.log(data);
    });
    
  }

}
