import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.page.html',
  styleUrls: ['./grados.page.scss'],
})
export class GradosPage implements OnInit {

  public idGrado:string;
  public atras;
  constructor(private activatedRoute: ActivatedRoute,  private router:Router) { }
  
  ngOnInit() {
    this.idGrado = this.activatedRoute.snapshot.paramMap.get('idGrado');

    
    
  }

}
