import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

imports :
[
  BrowserModule,
  FormsModule,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  
  user:string="";
  pass:string="";
  constructor(private http: HttpClient, private router: Router){}
  go(a:string){
    this.router.navigate([a])
  }
  login() {
    const Usuarios = { user: this.user, pass: this.pass};
    this.http.post('https://localhost:7223/api/login', Usuarios).subscribe(response => {
      console.log('Logueado:', response);
      this.router.navigate(['/pagina-principal']);//Redirección [MODIFICAR]
      
    },
    
)}


  
}



