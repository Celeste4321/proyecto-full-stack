import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colonazepam',
  templateUrl: './colonazepam.component.html',
  styleUrls: ['./colonazepam.component.css']
})
export class ColonazepamComponent {
  constructor( private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
}