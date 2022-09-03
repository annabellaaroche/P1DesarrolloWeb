import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  marcajes:Array<any>=[{marcaje_id:"1",nombre:"annabella",apellidos:"aroche",hora:"20:35",fecha:"30/08/2022"}];
  ngOnInit(): void {
   /* this.postService.getAll().subscribe((data: Product[])=>{
      this.products = data;
    })  */
  }
  deleteMarcaje(id:number){
    /*this.postService.delete(id).subscribe(res => {
         this.products = this.products.filter(item => item.product_id !== id);
         console.log('Post deleted successfully!');
    })*/
  }
}
