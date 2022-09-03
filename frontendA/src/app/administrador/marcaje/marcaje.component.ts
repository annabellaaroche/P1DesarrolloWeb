import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcado } from 'src/app/models/marcado';
import { MarcajeService } from 'src/app/services/marcaje.service';

@Component({
  selector: 'app-marcaje',
  templateUrl: './marcaje.component.html',
  styleUrls: ['./marcaje.component.css']
})
export class MarcajeComponent implements OnInit {
  today=new Date();
  fecha ='';
  hora ='';
  entrada:boolean=true;
  id_usuario= 1;
  marcado: Marcado = new Marcado();
  constructor(
    private marcajeService: MarcajeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //this.id_usuario = this.route.snapshot.params['id'];
    this.setDate();
    this.marcajeService.getMarcajeByUser(this.id_usuario,this.fecha).subscribe((data:Marcado)=>{
    this.marcado = data;
  });
}

  Marcaje(){
    this.setDate();
    this.marcajeService.createMarcaje(this.marcado).subscribe((res:any) => {
      if(this.entrada!=false){
        this.entrada =false; 
      }else{
        alert("Marcaje con exito, tu ultimo marcaje fue a las "+this.fecha +this.hora);
      }
    })
  }

  setDate(){
    this.today=new Date();
    this.fecha = formatDate(this.today, 'MM-dd-yy'	, 'en-US');
    this.hora = formatDate(this.today, 'h:mm:ss a'	, 'en-US');
  }
}
