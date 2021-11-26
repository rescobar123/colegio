import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../../services/ws/usuario.service';
import { AlertI } from '../../models/comunes/AlertI';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioI } from '../../models/Usuario.Interface';
import { CentroEducativoI } from '../../models/CentroEducativo.Interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nuevoForm = new FormGroup({
    nick:  new FormControl(''),
    password: new FormControl(''),
});

  constructor(public alertController: AlertController, private ws:UsuarioService) { }

  ngOnInit() {
    let token = localStorage.getItem("token");
    if(token){
      console.log("Ya esta logueado");
      //Validar el token en la db
      console.log(token);
    }else{
      
    }
  }
  postForm(form:UsuarioI){
    this.ws.postLogin(form).subscribe( data => {
      let alerta:AlertI = data;
      if(alerta.tipo == "success"){
        this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje, "");
        
        this.nuevoForm.reset();
        //Almacenar datos en local storage
        localStorage.setItem('token', alerta.jwt.jwt);
        //hasta aca para almacenar datos
      }else{
        this.presentAlertMultipleButtons(alerta.tipo, alerta.mensaje, alerta.error);
      }

    });
  }

  async presentAlertMultipleButtons(titulo:string, mensaje:string, error: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
