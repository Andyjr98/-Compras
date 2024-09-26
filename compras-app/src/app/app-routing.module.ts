import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './clientes/client-list/client-list.component';
import { ClientCreateComponent } from './clientes/client-create/client-create.component';
import { ClientEditComponent } from './clientes/client-edit/client-edit.component';
import { ProductListComponent } from './productos/product-list/product-list.component';
import { ProductCreateComponent } from './productos/product-create/product-create.component';
import { ProductEditComponent } from './productos/product-edit/product-edit.component';
import { PurchaseListComponent } from './compras/purchase-list/purchase-list.component';
import { PurchaseCreateComponent } from './compras/purchase-create/purchase-create.component';
import { PurchaseEditComponent } from './compras/purchase-edit/purchase-edit.component';

const routes: Routes = [
  { path: 'clientes', component: ClientListComponent },
  { path: 'clientes/create', component: ClientCreateComponent },
  { path: 'clientes/edit/:id', component: ClientEditComponent },
  { path: 'productos', component: ProductListComponent },
  { path: 'productos/create', component: ProductCreateComponent },
  { path: 'productos/edit/:id', component: ProductEditComponent },
  { path: 'compras', component: PurchaseListComponent },
  { path: 'compras/create', component: PurchaseCreateComponent },
  { path: 'compras/edit/:id', component: PurchaseEditComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
