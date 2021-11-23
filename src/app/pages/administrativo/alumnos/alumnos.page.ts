import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AlumnoI } from '../../../models/Alumno.Interface';
import { AlumnoService } from '../../../services/ws/alumno.service';
import { Router, ActivationStart, RouterOutlet } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlumnosPage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  @ViewChild('table') table: DatatableComponent;
  public allAlumnos:AlumnoI[]=[];
  public col: any;
  public rows: any;
  public info = [];
  public filteredData = [];

  constructor(private ws:AlumnoService, private router:Router) {
    this.col = [
      { name: 'Ver' },
      { name: 'CodigoAlumno' },
      { name: 'Nombres' },
      { name: 'Apellidos' },
      { name: 'Celular' },
      { name: 'Actions' }
    ];
   }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "alumno-inscribir")
        this.outlet.deactivate();
    });
    
    this.ws.getAllAlumnos(1).subscribe(data=>{
      this.allAlumnos = data;
      this.rows = data;
      console.log(data);
      this.info = this.allAlumnos;
      this.filteredData = this.allAlumnos;
    });

   
    
  }

  filterDatatable(event){
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = 12;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.allAlumnos[0]);
    
    // assign filtered matches to the active datatable
    this.info = this.filteredData.filter(function(item){
      // iterate through each row's column data
      for (let i=0; i<colsAmt; i++){
        
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
          // found match, return true to add to result set
          console.log(keys[i]);
          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelectRed(row) {
    console.log(row);
  }
  
  onSelectBlue(value) {
    console.log(value);
  }
}



