import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AosNavbarComponent } from './aos-navbar/aos-navbar.component';
import { AosHomeComponent } from './aos-home/aos-home.component';
import { AosProductsComponent } from './aos-products/aos-products.component';
import { AosCartComponent } from './aos-cart/aos-cart.component';
import { AosCheckoutComponent } from './aos-checkout/aos-checkout.component';
import { AosOrdersComponent } from './aos-orders/aos-orders.component';
import { AosAdminProductsComponent } from './admin/aos-admin-products/aos-admin-products.component';
import { AosAdminOrdersComponent } from './admin/aos-admin-orders/aos-admin-orders.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    AosNavbarComponent,
    AosHomeComponent,
    AosProductsComponent,
    AosCartComponent,
    AosCheckoutComponent,
    AosOrdersComponent,
    AosAdminProductsComponent,
    AosAdminOrdersComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: AosHomeComponent},
      {path: 'login', component: LoginPanelComponent},
      {path: 'shopping-products', component: AosProductsComponent},
      {path: 'shopping-orders', component: AosOrdersComponent},
      {path: 'shopping-cart', component: AosCartComponent},
      {path: 'shopping-checkout', component: AosCheckoutComponent},
      {path: 'admin/products', component: AosAdminProductsComponent},
      {path: 'admin/orders', component: AosAdminOrdersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
