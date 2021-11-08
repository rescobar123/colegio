import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';


@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  public cursos;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.cursos =  [
      { title: 'Ciencias Naturales', url: '/actividades/Ciencias Naturales', icon: 'home' },
      { title: 'Idioma Espaniol', url: '/actividades/Idioma Espaniol', icon: 'paper-plane' },
      { title: 'Ingles', url: '/actividades/Ingles', icon: 'heart' },
      { title: 'Ciencias Naturales', url: '/actividades/Ciencias Naturales', icon: 'home' },
      { title: 'Idioma Espaniol', url: '/actividades/Idioma Espaniol', icon: 'paper-plane' },
      { title: 'Ingles', url: '/actividades/Ingles', icon: 'heart' },
      { title: 'Ciencias Naturales', url: '/actividades/Ciencias Naturales', icon: 'home' },
      { title: 'Idioma Espaniol', url: '/actividades/Idioma Espaniol', icon: 'paper-plane' },
      { title: 'Ingles', url: '/actividades/Ingles', icon: 'heart' },
      { title: 'Ciencias Naturales', url: '/actividades/Ciencias Naturales', icon: 'home' },
      { title: 'Idioma Espaniol', url: '/actividades/Idioma Espaniol', icon: 'paper-plane' },
      { title: 'Ingles', url: '/actividades/Ingles', icon: 'heart' },
      { title: 'Ciencias Naturales', url: '/actividades/Ciencias Naturales', icon: 'home' },
      { title: 'Idioma Espaniol', url: '/actividades/Idioma Espaniol', icon: 'paper-plane' },
      { title: 'Ingles', url: '/actividades/Ingles', icon: 'heart' },
    ];
  }

  async openModal(curso){
    
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'curso': curso,
        'cursoId': 1
      }
    });
    return await modal.present();
  }

}
