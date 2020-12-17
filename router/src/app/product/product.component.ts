import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    productId: number;

    constructor(private routerInfo: ActivatedRoute) {
    }

    ngOnInit(): void {
        // 路由带参数 方法一 接收参数
        // this.productId = this.routerInfo.snapshot.queryParams.id;
        // 路由带参数 方法二 接收参数  snapshot:参数快照,只保存第一次赋值 如果组件不会自己路由到自己
        // this.productId = this.routerInfo.snapshot.params.id;
        // 订阅机制 subscribe
        this.routerInfo.params.subscribe((value => this.productId = value.id));
    }

}
