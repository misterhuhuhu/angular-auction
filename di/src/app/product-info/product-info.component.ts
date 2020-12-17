import {Component, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
    selector: 'app-product-info',
    templateUrl: './product-info.component.html',
    styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

    product: Product;
    private productService: ProductService;

    constructor(private injector: Injector) {
        this.productService = this.injector.get(ProductService);
    }

    ngOnInit(): void {
        this.product = this.productService.getProduct();
    }

}
