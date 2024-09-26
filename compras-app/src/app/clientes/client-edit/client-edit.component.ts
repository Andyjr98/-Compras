import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  client: any = {};

  constructor(
    private clientService: ClientService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClients().subscribe(data => {
      this.client = data.find(client => client.id == id);
    });
  }

  updateClient(): void {
    this.clientService.updateClient(this.client).subscribe(() => {
      this.router.navigate(['/clientes']);
    });
  }
}
