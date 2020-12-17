import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductServiceService extends ProductService{


  getProduct(): Product {
    return new Product(2, 'iPhone12', 9999, '新手机');
  }
}
