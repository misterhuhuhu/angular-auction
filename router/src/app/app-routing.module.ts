import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';

const routes: Routes = [
    // path=路径 component=组件
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        // 路由带参数 方法二:
        path: 'product/:id',
        component: ProductComponent,
        children: [
            {path: '', component: ProductDescComponent},
            // http://localhost:4200/product/2/seller/99
            {path: 'seller/:id', component: SellerInfoComponent}
        ]
    },
    {
        // 访问的路由不存在时,将展示 Code404Component
        // 这个通配符**必须是最后匹配的
        path: '**', component: Code404Component
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
