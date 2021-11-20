import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  public notas;
  constructor() { }

  ngOnInit() {
    this.notas =  [
      { curso: 'Ciencias Naturales', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Matematicas', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Español', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
      { curso: 'Ingles', escritura: '10', lectura: '20', asistencia: '10' , examen: '61'  },
    ];
  }

}
