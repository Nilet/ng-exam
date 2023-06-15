import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ItemsPipe } from './pipes/items.pipe';
import { AppComponent } from './app.component';
import { CartService, ProductService } from './services';
import {
  ToolbarComponent,
  ProductsComponent,
  ProductComponent,
} from './components';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductComponent,
    ProductsComponent,
    ItemsPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: ProductsComponent,
        },
      ],
      {
        initialNavigation: 'enabledNonBlocking',
      }
    ),
    AppRoutingModule,
  ],
  providers: [CartService, {
    provide: ProductService,
    deps: [HttpClient]
  }, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
