import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecursoService } from '../../../services/ws/recursos.service';
import { DocenteI } from '../../../models/Docente.Interface';
import { __importStar } from 'tslib';
import { CentroEducativoI } from '../../../models/CentroEducativo.Interface';
import { AlertI } from '../../../models/comunes/AlertI';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.page.html',
  styleUrls: ['./maestros.page.scss'],
})

export class MaestrosPage implements OnInit {

  nuevoForm = new FormGroup({
    centroEducativo:  new FormControl(''),
    nombreCompleto: new FormControl(''),
    direccion:  new FormControl(''),
    telefono:  new FormControl(''),
    escolaridad:  new FormControl(''),
});

  constructor(public alertController: AlertController, private ws:RecursoService) { }

  ngOnInit() {

  }
  postForm(form:DocenteI){
    //aca deberia traer el id del centro educativo
    let centroEducativo:CentroEducativoI = {
      "idCentroEducativo": 1
    };
    console.log("Aca va");
    form.centroEducativo =  centroEducativo;
    this.ws.postDocente(form).subscribe( data => {
      let alerta:AlertI = data;
      if(alerta.tipo == "success"){
        this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje);
        console.log("Exito");
        this.nuevoForm.reset();
      }else{
        this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje);
      }
    });

    console.log(form);
   
  }

  async presentAlertMultipleButtons(titulo:string, mensaje:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
