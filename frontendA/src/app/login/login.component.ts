import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log=false;
  constructor(
    private router: Router
  ) { } 
  ngOnInit(

  ): void {
  }

ingresar(){
  this.log=true;
  this.router.navigateByUrl('/admini/marcaje');
}
}
