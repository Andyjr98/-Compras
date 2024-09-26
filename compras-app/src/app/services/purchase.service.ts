import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private apiUrl = 'http://localhost/compras/crud'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  getPurchases(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read_purchases.php`);
  }

  createPurchase(purchase: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create_purchase.php`, purchase);
  }

  updatePurchase(purchase: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update_purchase.php`, purchase);
  }

  deletePurchase(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete_purchase.php`, { id });
  }
}
