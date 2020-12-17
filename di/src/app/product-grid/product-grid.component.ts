import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
    selector: 'app-product-grid',
    templateUrl: './product-grid.component.html',
    styleUrls: ['./product-grid.component.css'],
    providers: [{provide: ProductService}]
})
export class ProductGridComponent implements OnInit {

    product: Product;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.product = this.productService.getProduct();
    }


}
