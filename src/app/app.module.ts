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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductComponent,
    ProductsComponent,
    ItemsPipe,
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [CartService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
