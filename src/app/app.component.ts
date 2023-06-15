import { Component, inject } from '@angular/core';
import { CartService } from './services';

@Component({
  selector: 'app-root',
  template: `
    <app-toolbar [title]="title" [total]="cartService.total$"></app-toolbar>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
      }
      :host main {
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        padding: 16px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'bitcart';

  cartService = inject(CartService);
}
