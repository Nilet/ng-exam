import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services';

@Component({
  selector: 'app-products',
  template: `
    <p>Produtos</p>

    <section *ngIf="products$ | async as products">
      <app-product
        *ngFor="let product of products"
        [items]="cartService.items$ | async | items : product.id"
        [product]="product"
        (buy)="cartService.add($event)"
      ></app-product>
    </section>
  `,
  styles: [
    `
      :host section {
        display: flex;
        flex-direction: column;
        gap: 48px;
      }
      :host p {
        font-size: 1.6rem;
      }
    `,
  ],
})
export class ProductsComponent {
  productService = inject(ProductService);
  products$ = this.productService.get();

  cartService = inject(CartService);
}
