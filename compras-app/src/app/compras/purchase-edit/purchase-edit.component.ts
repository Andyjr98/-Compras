import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.scss']
})
export class PurchaseEditComponent implements OnInit {
  purchase: any = {};

  constructor(
    private purchaseService: PurchaseService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.purchaseService.getPurchases().subscribe(data => {
      this.purchase = data.find(purchase => purchase.id == id);
    });
  }

  updatePurchase(): void {
    this.purchaseService.updatePurchase(this.purchase).subscribe(() => {
      this.router.navigate(['/compras']);
    });
  }
}
