import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ProductResolveGuard} from './guard/product.guard';

const routes: Routes = [
    // path=路径 component=组件
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        // 显示在 <router-outlet name="aux"></router-outlet> 上
        path: 'char', component: ChatComponent, outlet: 'aux'
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
        ],
        /*
        * 路由守卫
        * 1、只有当用户已经登录并拥有某些权限时才能进入某些路由。
        * 2、一个由多个表单组件组成的向导,例如注册流程,用户只有在当前路由的组件中填写了满足要求的信息才可以导航到下一个路由
        * 3、当用户未执行保存操作而试图离开当前导航时提醒用户,
        *
        * canActivate:处理导航到某路由的情况。
        * canDeactivate:处理从当前路由离开的情况。
        * Resolve:在路由激活之前获取路由数据。
        * */
       /* canActivate: [LoginGuard],
        canDeactivate: [UnsavedGuard]*/
        resolve: {
            product: ProductResolveGuard
        }
    },
    {
        // 访问的路由不存在时,将展示 Code404Component
        // 这个通配符**必须是最后匹配的
        path: '**', component: Code404Component
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // 再次声明LoginGuard
    // providers: [LoginGuard,UnsavedGuard]
    providers: [ProductResolveGuard]
})
export class AppRoutingModule {
}
