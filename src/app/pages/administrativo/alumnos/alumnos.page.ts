import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoI } from '../../../models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';
import { Router, ActivationStart, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  public allAlumnos:AlumnoI[]=[];
  constructor(private ws:AlumnoService, private router:Router) { }

  ngOnInit(): void {

    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "alumno-inscribir")
        this.outlet.deactivate();
    });
    
    this.ws.getAllAlumnos().subscribe(data=>{
      this.allAlumnos = data;
      console.log(data);
    });
    
  }

}
