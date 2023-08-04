import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-foro',
  templateUrl: './foro-de-experiencia.component.html',
  styleUrls: ['./foro-de-experiencia.component.css']
})
export class ForoComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}