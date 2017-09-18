import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HistoryOrderComponent } from './history-order/history-order.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { BeforeLoginComponent } from './before-login/before-login.component';
import {LoginService} from "./service/login.service";
import { CoffeeComponent } from './product/coffee/coffee.component';
import { CoffeeMachineComponent } from './product/coffee-machine/coffee-machine.component';
import {AccessoryComponent} from "./product/accessory/accessory.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HistoryOrderComponent,
    ShoppingCartComponent,
    ProductComponent,
    SidebarComponent,
    HomeComponent,
    AfterLoginComponent,
    BeforeLoginComponent,
    CoffeeComponent,
    CoffeeMachineComponent,
    AccessoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
