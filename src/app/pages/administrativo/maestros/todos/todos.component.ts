import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { DocenteI } from '../../../../models/Docente.Interface';
import { RecursoService } from '../../../../services/ws/recursos.service';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TodosComponent implements OnInit {
  @ViewChild('table') table: DatatableComponent;
  public allDocentes:DocenteI[]=[];
  public col: any;
  public rows: any;
  public info = [];
  public filteredData = [];
  constructor(private ws:RecursoService) {
    this.col = [
      { name: 'NombreCompleto' },
      { name: 'Direccion' },
      { name: 'Telefono' },
      { name: 'Escolaridad' },
      { name: 'Actions' }
    ];
   }

  ngOnInit() {
    this.ws.getAllDocentes().subscribe(data=>{
      this.allDocentes = data;
      console.log(data);
      this.rows = data;
      console.log(data);
      this.info = this.allDocentes;
      this.filteredData = this.allDocentes;
    });
  }

  filterDatatable(event){
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = 6;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.allDocentes[0]);
    
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

}
