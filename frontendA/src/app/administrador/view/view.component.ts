import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { MarcajeService } from 'src/app/services/marcaje.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id_usuario!: number;
  usuario: Usuario = new Usuario();

  constructor(
    private marcajeService: MarcajeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {  
    this.id_usuario = this.route.snapshot.params['id'];
    this.marcajeService.find(this.id_usuario).subscribe((data: Usuario)=>{
      this.usuario = data;
    });
  }
}
