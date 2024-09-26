import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseCreateComponent } from './purchase-create/purchase-create.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PurchaseListComponent, PurchaseCreateComponent, PurchaseEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: PurchaseListComponent },
      { path: 'create', component: PurchaseCreateComponent },
      { path: 'edit/:id', component: PurchaseEditComponent }
    ])
  ]
})
export class ComprasModule {}
