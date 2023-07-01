import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocainaComponent } from './cocaina/cocaina.component';
import { MarihuanaComponent } from './marihuana/marihuana.component';
import { PacoComponent } from './paco/paco.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LSDComponent } from './lsd/lsd.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ForoDeAyudaComponent } from './foro-de-ayuda/foro-de-ayuda.component';
import { ForoComponent } from './foro/foro.component';
import { ClonazepamComponent } from './clonazepam/clonazepam.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CocainaComponent,
    MarihuanaComponent,
    PacoComponent,
    PaginaPrincipalComponent,
    LSDComponent,
    CuentaComponent,
    ForoDeAyudaComponent,
    ForoComponent,
    ClonazepamComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Intervention } from '../../model/intervention';

@Component({
   selector: 'intervention-details',
   templateUrl: 'app/intervention/details/intervention.details.html',
   styleUrls: ['app/intervention/details/intervention.details.css']
})
    
export class InterventionDetails
{
   @Input() intervention: Intervention;
    
   public test : string = "toto";
}




