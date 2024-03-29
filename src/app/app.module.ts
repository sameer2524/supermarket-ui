import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { ContactComponent } from './contact/contact.component';
import { RpoductDetailsComponent } from './user/rpoduct-details/rpoduct-details.component';
import { CartComponent } from './cart/cart.component';
import { CartDeleteComponent } from './cart/cart-delete/cart-delete.component';
import { GuestComponent } from './user/guest/guest.component';
import { SearchProductComponent } from './user/search-product/search-product.component';
import { SearchAdminProductComponent } from './admin/search-admin-product/search-admin-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    UpdateproductComponent,
    ContactComponent,
    RpoductDetailsComponent,
    CartComponent,
    CartDeleteComponent,
    GuestComponent,
    SearchProductComponent,
    SearchAdminProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
