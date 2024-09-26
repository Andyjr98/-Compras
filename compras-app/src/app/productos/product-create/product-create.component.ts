import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  product: any = { nombre: '', precio: 0 };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/productos']);
    });
  }
}
