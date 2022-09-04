import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
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
  id_usuario= 9;
  id_estado=0;
  marcado: Marcado = new Marcado();
  lastMarcaje: Marcado[]=[];
  constructor(
    private marcajeService: MarcajeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //this.id_usuario = this.route.snapshot.params['id'];
    this.setDate();
    this.marcajeService.getMarcajeByUser(this.id_usuario,this.fecha).subscribe((data:Marcado[])=>{
    this.lastMarcaje = data;
    let ultimoRegistro = this.lastMarcaje.pop();
    if(ultimoRegistro!=null){
      this.entrada=false;
      this.fecha=ultimoRegistro.fecha;
      this.hora= ultimoRegistro.hora;
      this.id_estado=2;
    }
  });
}

  Marcaje(){    
    if(this.entrada!=false){
      this.entrada =false;
      this.marcar(1);
    }else{
      this.marcar(2);
    }
  }

  setDate(){
    this.today=new Date();
    this.fecha = formatDate(this.today, 'MM-dd-yyyy'	, 'en-US');
    this.hora = formatDate(this.today, 'h:mm:ss a'	, 'en-US');
  }

  marcar(id_estado: number){
    this.setDate();
    this.marcado.fk_idUsuario=this.id_usuario;
    this.marcado.fk_idestado=id_estado;
    this.marcado.fecha=this.fecha;
    this.marcado.hora =this.hora;
    this.marcajeService.createMarcaje(this.marcado).subscribe((res:any) => {
    })    
      alert("Marcaje con exito, tu ultimo marcaje fue a las "+this.fecha +this.hora);
    
  }
}
