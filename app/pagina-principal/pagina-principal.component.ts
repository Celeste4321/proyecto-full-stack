import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}
