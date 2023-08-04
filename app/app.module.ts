import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CocainaComponent} from './cocaina/cocaina.component';
import { MarihuanaComponent } from './marihuana/marihuana.component';
import { PacoComponent } from './paco/paco.component';
import { PaginaPrincipalComponent} from './pagina-principal/pagina-principal.component';
import { LSDComponent } from './lsd/lsd.component';
import {CuentaComponent} from './cuenta/cuenta.component';
import {ForoDeAyudaComponent} from './foro-de-ayuda/foro-de-ayuda.component';
import { ForoComponent } from './foro-de-experiencia/foro-de-experiencia.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { ColonazepamComponent } from './colonazepam/colonazepam.component';



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
    ColonazepamComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }


