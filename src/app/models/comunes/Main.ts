import { AlertController } from '@ionic/angular';
export class Main{
    async presentAlertMultipleButtons(titulo:string, mensaje:string, error:string, alertController: AlertController) {
        const alert = await alertController.create({
          header: titulo,
          message: mensaje,
          buttons: ['Aceptar']
        });
        await alert.present();
      }
}