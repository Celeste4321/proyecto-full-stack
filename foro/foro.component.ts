import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}

