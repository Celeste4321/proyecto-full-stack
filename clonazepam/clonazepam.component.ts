import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clonazepam',
  templateUrl: './clonazepam.component.html',
  styleUrls: ['./clonazepam.component.css']
})
export class ClonazepamComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}
