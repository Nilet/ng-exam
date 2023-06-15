import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  productsUrl = 'assets/products.json'
  get() {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
