import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'router';

    constructor(private router: Router) {
    }
    toProduct(): void {
        // 路径与 <a [routerLink]="['/product']">商品详情</a>一样
        // this.router.navigate(['/product']);

        // 路由带参数
        this.router.navigate(['/product', 2]);
    }
}
