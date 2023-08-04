import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocaina',
  templateUrl: './cocaina.component.html',
  styleUrls: ['./cocaina.component.css']
})
export class CocainaComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}
