import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../product/product.component';

@Injectable()
export class ProductResolveGuard implements Resolve<Product> {

    constructor(private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Product> | Promise<Product> | Product {

        // 也就是 this.productId = this.routerInfo.snapshot.params.id;的 snapshot返回值
        // route.params.id返回的时string
        const productId: number = route.params.id;
        if (productId === 1) {
            return new Product(1, 'iPhone11');
        } else {
            this.router.navigate(['/home']);
            return undefined;
        }


    }

}
