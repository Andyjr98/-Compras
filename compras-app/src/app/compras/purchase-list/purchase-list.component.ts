import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  purchases: any[] = [];

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.loadPurchases();
  }

  loadPurchases(): void {
    this.purchaseService.getPurchases().subscribe(
      (data) => {
        this.purchases = data;
      },
      (error) => {
        console.error('Error fetching purchases', error);
      }
    );
  }

  deletePurchase(id: number): void {
    this.purchaseService.deletePurchase(id).subscribe(() => {
      this.loadPurchases();
    });
  }
}
