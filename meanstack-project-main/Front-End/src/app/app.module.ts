import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeProductsDetailsComponent } from './home-products-details/home-products-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { BeautyPageComponent } from './beauty-page/beauty-page.component';
import { BeautyProductDetailsComponent } from './beauty-product-details/beauty-product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobilesDetailsComponent } from './mobiles-details/mobiles-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeProductsDetailsComponent,
    AboutUsComponent,
    FooterComponent,
    BeautyPageComponent,
    BeautyProductDetailsComponent,
    ShoppingCartComponent,
    SignupComponent,
    MobilesComponent,
    MobilesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
