import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paco',
  templateUrl: './paco.component.html',
  styleUrls: ['./paco.component.css']
})
export class PacoComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}
