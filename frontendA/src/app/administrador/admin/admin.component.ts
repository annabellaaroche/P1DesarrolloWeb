import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { MarcajeService } from 'src/app/services/marcaje.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuario: Usuario[] = [];
  constructor(
    public marcajeService: MarcajeService,
    private router: Router
    ) { }
  ngOnInit(): void {
    this.marcajeService.getAll().subscribe((data: Usuario[])=>{
      this.usuario = data;
      
    })  
  }
  deleteUsuario(id:number){
    this.marcajeService.delete(id).subscribe(res => {
         this.usuario = this.usuario.filter(item => item.id_usuario !== id);
         console.log('Post deleted successfully!');
    })
  }
}
