import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {ProductService} from './shared/product.service';
import {ProductGridComponent} from './product-grid/product-grid.component';
import {LoggerService} from './shared/logger.service';
import {AnotherProductServiceService} from './shared/another-product-service.service';

@NgModule({
    declarations: [
        AppComponent,
        ProductInfoComponent,
        ProductGridComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [{
        provide: ProductService,
        useFactory: (logger: LoggerService, isDev) => {
            if (isDev.isDev) {
                return new ProductService(logger);
            } else {
                return new AnotherProductServiceService(logger);
            }
        },
        deps: [LoggerService, 'IS_DEV_ENV']
    },
        LoggerService,
        {provide: 'IS_DEV_ENV', useValue: {isDev: false}}
        // {provide: 'IS_DEV_ENV', useValue: false}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
