import {RouterModule, Routes} from "@angular/router";
import {BeforeLoginComponent} from "./before-login/before-login.component";
import {HomeComponent} from "./home/home.component";
import {HistoryOrderComponent} from "./history-order/history-order.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {NgModule} from "@angular/core";
import {LoginGuardService} from "./guard/login-guard.service";
/**
 * Created by ZhangHaodong on 2017/8/10.
 */
export const routes: Routes = [
  {path: '', component: BeforeLoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuardService]},
  {path: 'history', component: HistoryOrderComponent},
  {path: 'ShoppingCart', component: ShoppingCartComponent}
];

//export const MAIN_ROUTER_PROVIDE = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuardService]
})
export class AppRoutingModule{}

