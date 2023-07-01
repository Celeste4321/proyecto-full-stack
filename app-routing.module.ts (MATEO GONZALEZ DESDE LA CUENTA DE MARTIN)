import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PacoComponent} from './paco/paco.component';
import {CocainaComponent} from './cocaina/cocaina.component';
import {LSDComponent} from './lsd/lsd.component';
import {ClonazepamComponent} from './clonazepam/clonazepam.component';
import {PaginaPrincipalComponent} from './pagina-principal/pagina-principal.component';
import {CuentaComponent} from './cuenta/cuenta.component';
import {MarihuanaComponent} from './marihuana/marihuana.component';
import {ForoComponent} from './foro/foro.component';
import {IndexComponent} from './index/index.component';
import { ForoDeAyudaComponent } from './foro-de-ayuda/foro-de-ayuda.component';


const routes: Routes = [
  {path:'paco', component:PacoComponent},
  {path:'cocaina', component:CocainaComponent},
  {path:'marihuana', component:MarihuanaComponent},
  {path:'lsd', component:LSDComponent},
  {path:'clonazepam', component:ClonazepamComponent},
  {path:'pagina-principal', component:PaginaPrincipalComponent},
  {path:'cuenta', component:CuentaComponent},
  {path:'foro', component:ForoComponent},
  {path:'foro2', component:ForoDeAyudaComponent},
  {path:'', component:IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



