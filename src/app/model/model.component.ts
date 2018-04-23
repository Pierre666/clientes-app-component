import { Component, OnInit } from '@angular/core';
/**Importando service*/
import  {MyserviceService} from '../services/myservice.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

/**Laamando a service*/
  constructor(public clientesService: MyserviceService) { }

  ngOnInit() {
  	 console.log(this.clientesService);
  }

  lado:String = "12";

  


}
