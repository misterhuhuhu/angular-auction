import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ProductComponent} from '../product/product.component';
import {Observable} from 'rxjs';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {

    canDeactivate(component: ProductComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return window.confirm('你还没有保存.确定要离开么?');
    }

}
