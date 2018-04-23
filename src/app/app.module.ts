import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**Para trabajar con ngModel*/
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ForComponent } from './for/for.component';
import { ModelComponent } from './model/model.component';
/**services**/
import  {MyserviceService} from './services/myservice.service';
import  {ClienteService} from './services/cliente.service';
import { AnadirClienteComponent } from './componentes/cliente/anadir-cliente/anadir-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ForComponent,
    ModelComponent,
    AnadirClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	MyserviceService,
  	ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
