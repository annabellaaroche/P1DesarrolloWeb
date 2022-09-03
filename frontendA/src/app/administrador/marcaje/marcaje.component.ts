import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcaje',
  templateUrl: './marcaje.component.html',
  styleUrls: ['./marcaje.component.css']
})
export class MarcajeComponent implements OnInit {
  today=new Date();
  jstoday = '';
  entrada:boolean=true;
  marcaje:boolean=false;
  constructor() {
  }

  ngOnInit(): void {
  }

  Marcaje(){
    this.today=new Date();
    this.jstoday = formatDate(this.today, 'M/d/yy, h:mm:ss a'	, 'en-US');
    if(this.entrada!=false){
      this.entrada =false; 
      this.marcaje=true;
    }else{
      alert("Marcaje con exito, tu ultimo marcaje fue a las "+this.jstoday);
    }
  }
}
