import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost/compras/crud'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read_products.php`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create_product.php`, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update_product.php`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete_product.php`, { id });
  }
}
