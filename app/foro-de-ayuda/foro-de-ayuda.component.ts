import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-foro-de-ayuda',
  templateUrl: './foro-de-ayuda.component.html',
  styleUrls: ['./foro-de-ayuda.component.css']
})
export class ForoDeAyudaComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}