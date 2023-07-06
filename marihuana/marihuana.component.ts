import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marihuana',
  templateUrl: './marihuana.component.html',
  styleUrls: ['./marihuana.component.css']
})
export class MarihuanaComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}
