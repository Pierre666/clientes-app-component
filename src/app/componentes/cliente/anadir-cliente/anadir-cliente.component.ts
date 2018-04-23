import { Component, OnInit } from '@angular/core';
/**/
import { ClienteService } from '../../../services/cliente.service';
/***/
import { Cliente } from '../../../interfaces/cliente'

@Component({
  selector: 'app-anadir-cliente',
  templateUrl: './anadir-cliente.component.html',
  styleUrls: ['./anadir-cliente.component.css']
})
export class AnadirClienteComponent implements OnInit {

  cliente:Cliente;

  constructor(public clientesService:ClienteService) { }

  ngOnInit() {
	this.cliente = this.clientesService.obtenerCliente();
	console.log(this.cliente.nombre+"---"+this.cliente.creado);
	//alert(this.cliente.nombre+"---"+this.cliente.creado);
  }

}