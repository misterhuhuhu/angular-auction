import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {AnotherProductServiceService} from '../shared/another-product-service.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
  providers: [{
    provide: ProductService, useClass: AnotherProductServiceService
  }]
})
export class ProductGridComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit(): void {
  }


}
