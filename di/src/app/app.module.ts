import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {ProductService} from './shared/product.service';
import {ProductGridComponent} from './product-grid/product-grid.component';
import {LoggerService} from './shared/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    ProductGridComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: ProductService, useClass: ProductService}, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
