import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {


    constructor() {
    }

    private product: Product[] = [
        new Product(1, '第一个商品', 1.99, 1.5, '这是第一个商品', ['电子', '文化']),
        new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品', ['娱乐', '文化']),
        new Product(3, '第三个商品', 3.99, 3.5, '这是第三个商品', ['电子', '文化']),
        new Product(4, '第四个商品', 4.99, 5.0, '这是第四个商品', ['书籍', '文化']),
        new Product(5, '第五个商品', 5.99, 4.5, '这是第五个商品', ['电子', '文化']),
        new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品', ['数码', '文化']),
        new Product(7, '第七个商品', 7.99, 1.5, '这是第七个商品', ['电子', '文化']),
    ];

    private comment: Comment[] = [
        new Comment(1, 1, '2020-02-01', 3, '熊大', '真可恶'),
        new Comment(2, 1, '2020-02-02', 4, '张三', '真可恶'),
        new Comment(3, 1, '2020-02-03', 5, '李四', '真可恶'),
        new Comment(4, 1, '2020-02-04', 1, '王五', '真可恶'),
        new Comment(5, 1, '2020-02-05', 2, '熊六', '真可恶'),
        new Comment(6, 2, '2020-02-06', 3, '熊二', '真可惜'),
        new Comment(7, 2, '2020-02-07', 2, '熊二', '真可惜'),
    ];

    getProducts(): Product[] {

        return this.product;
    }

    getProduct(id: number): Product {
        return this.product.find(value => value.id === Number(id));
    }

    getComments(): Comment[] {

        return this.comment;
    }

    getCommentByProductId(productId: number): Comment[] {

        return this.comment.filter(value => value.productId === Number(productId));
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

export class Comment {
    constructor(
        public id: number,
        public productId: number,
        public timeStamp: string,
        public rating: number,
        public user: string,
        public content: string
    ) {
    }
}
