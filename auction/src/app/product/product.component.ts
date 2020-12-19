import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {debounceTime} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  keyword: string;

  titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges.pipe(debounceTime(700)).subscribe(value => this.keyword = value);
  }

  imageUrl = 'https://via.placeholder.com/320x150';

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


}

