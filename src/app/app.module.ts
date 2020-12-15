import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StarsComponent,
    ProductComponent,
    NavbarComponent,
    CarouselComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
