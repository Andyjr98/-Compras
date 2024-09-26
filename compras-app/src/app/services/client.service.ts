import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost/compras/crud'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read_clients.php`);
  }

  createClient(client: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create_client.php`, client);
  }

  updateClient(client: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update_client.php`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete_client.php`, { id });
  }
}
