import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {
  }

}
