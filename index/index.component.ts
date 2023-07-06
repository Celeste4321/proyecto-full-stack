import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
  
})
export class IndexComponent {
  
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
