import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title2 = 'Haciendo pruebas';
  visible = false;
  decirAdios() {
    this.visible = true;
  }

  borrarAdios() {
    this.visible = false;
  }


/***/
 texto: string =  "SI";
  estadoPositivo: boolean = true;

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo; 
  }
/***/




}
