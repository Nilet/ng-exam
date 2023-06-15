import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'items',
})
export class ItemsPipe implements PipeTransform {
  transform(products: Product[] | null = [], id: number) {
    if (!products) return 0;
    return products.filter((product) => product.id === id).length;
  }
}
