import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcaje } from 'src/app/models/marcaje';
import { MarcajeService } from 'src/app/services/marcaje.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  marcaje_id!: number;
  marcaje: Marcaje = new Marcaje();

  constructor(
    private marcajeService: MarcajeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*this.marcaje_id = this.route.snapshot.params['productId'];
         
    this.marcajeService.find(this.marcaje_id).subscribe((data: Marcaje)=>{
      this.marcaje = data;
    });*/
  }
}
