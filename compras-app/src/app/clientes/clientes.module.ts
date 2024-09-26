import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { RouterModule } from '@angular/router'; // Esto es importante si usas rutas locales

@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateComponent,
    ClientEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule // Importa RouterModule aquí si usas rutas locales
  ],
  exports: [
    ClientListComponent,
    ClientCreateComponent,
    ClientEditComponent
  ]
})
export class ClientesModule {}
