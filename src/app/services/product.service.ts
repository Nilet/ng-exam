import { Product } from '../interfaces/product';
import { of } from 'rxjs';

export class ProductService {
  get() {
    return of<Product[]>([
      {
        id: 6,
        title: 'MacBook Pro',
        description:
          'MacBook Pro 2021 with mini-LED display may launch between September, November',
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: 'Apple',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
        images: [
          'https://i.dummyjson.com/data/products/6/1.png',
          'https://i.dummyjson.com/data/products/6/2.jpg',
          'https://i.dummyjson.com/data/products/6/3.png',
          'https://i.dummyjson.com/data/products/6/4.jpg',
        ],
      },
      {
        id: 7,
        title: 'Samsung Galaxy Book',
        description:
          'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: 'Samsung',
        category: 'laptops',
        thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/7/1.jpg',
          'https://i.dummyjson.com/data/products/7/2.jpg',
          'https://i.dummyjson.com/data/products/7/3.jpg',
          'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
        ],
      },
    ]);
  }
}
