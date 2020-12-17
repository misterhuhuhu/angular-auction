import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    product: Array<Product>;

    constructor() {
    }

    imageUrl = 'https://via.placeholder.com/320x150';

    ngOnInit(): void {
        this.product = [
            new Product(1, '第一个商品', 1.99, 1.5, '这是第一个商品', ['电子', '文化']),
            new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品', ['娱乐', '文化']),
            new Product(3, '第三个商品', 3.99, 3.5, '这是第三个商品', ['电子', '文化']),
            new Product(4, '第四个商品', 4.99, 5.0, '这是第四个商品', ['书籍', '文化']),
            new Product(5, '第五个商品', 5.99, 4.5, '这是第五个商品', ['电子', '文化']),
            new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品', ['数码', '文化']),
            new Product(7, '第七个商品', 7.99, 1.5, '这是第七个商品', ['电子', '文化']),
        ];
    }

}

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {
    }
}
