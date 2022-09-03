import { createComponent, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditarComponent } from './editar/editar.component';
import { AdminiComponent } from './admini/admini.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { MarcajeComponent } from './marcaje/marcaje.component';

const routes: Routes = [
  {
      path: 'admini',
      component: AdminiComponent,
      children: [
          {
              path: 'editar/:id',
              component: EditarComponent
          },
          {
            path: 'admin',
            component: AdminComponent
        },
        {
          path: 'view/:id',
          component: ViewComponent
      },
      {
        path: 'create',
        component: CreateComponent
    },
    {
      path: 'marcaje',
      component: MarcajeComponent
    }
       ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
