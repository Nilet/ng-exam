import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartService } from '../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: Product[] = []
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.items$.subscribe((items) => {
      this.items = items;
    });
  }

}
