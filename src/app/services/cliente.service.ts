import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente'

@Injectable()
export class ClienteService {

  clientes:Cliente[] = [];

  constructor() { }

  anadirCliente(cliente:Cliente){
  	this.clientes.push(cliente);
  }

  obtenerCliente():Cliente{
	return{
		nombre:"alignet",
		apellido:"sac",
		direccion:"casimiro ulloa 333",
		creado:new Date(Date.now())
  	};
}

}
