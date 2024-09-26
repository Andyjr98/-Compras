import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-create',
  templateUrl: './purchase-create.component.html',
  styleUrls: ['./purchase-create.component.scss']
})
export class PurchaseCreateComponent {
  purchase: any = { cliente: '', producto: '', cantidad: 0 };

  constructor(private purchaseService: PurchaseService, private router: Router) {}

  createPurchase(): void {
    this.purchaseService.createPurchase(this.purchase).subscribe(() => {
      this.router.navigate(['/compras']);
    });
  }
}
