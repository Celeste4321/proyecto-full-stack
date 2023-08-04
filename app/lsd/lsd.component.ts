import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lsd',
  templateUrl: './lsd.component.html',
  styleUrls: ['./lsd.component.css']
})
export class LSDComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}
