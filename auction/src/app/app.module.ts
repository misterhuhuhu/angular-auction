import {StarsComponent} from './stars/stars.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {SearchComponent} from './search/search.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CarouselComponent} from './carousel/carousel.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './shared/product.service';

const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: 'product/:productTitle', component: ProductDetailComponent},
    {path: 'product/:productId', component: ProductDetailComponent},

];

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        StarsComponent,
        ProductComponent,
        NavbarComponent,
        CarouselComponent,
        SearchComponent,
        ProductDetailComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
