import {CanActivate, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

export class LoginGuard implements CanActivate {
    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const loggedIn: boolean = Math.random() < 0.5;

        if (!loggedIn) {
            console.log('LoginGuard:用户未登录' + new Date());
        } else {
            console.log('LoginGuard:登录' + new Date());
        }

        return loggedIn;

    }

}
