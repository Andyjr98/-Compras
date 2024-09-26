import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent {
  client: any = { nombre: '', email: '' };

  constructor(private clientService: ClientService, private router: Router) {}

  createClient(): void {
    this.clientService.createClient(this.client).subscribe(() => {
      this.router.navigate(['/clientes']);
    });
  }
}
