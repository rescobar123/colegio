import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  public idGrado:string;
  constructor(private activatedRoute: ActivatedRoute,  private router:Router) { }

  ngOnInit() {
    this.idGrado = this.activatedRoute.snapshot.paramMap.get('idGrado');
  }

}
