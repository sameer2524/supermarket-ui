import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { RpoductDetailsComponent } from './user/rpoduct-details/rpoduct-details.component';
import { CartComponent } from './cart/cart.component';
import { CartDeleteComponent } from './cart/cart-delete/cart-delete.component';
import { GuestComponent } from './user/guest/guest.component';
import { SearchProductComponent } from './user/search-product/search-product.component';
import { SearchAdminProductComponent } from './admin/search-admin-product/search-admin-product.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'user',
    component: UserComponent
},
{
    path: 'admin',
    component: AdminComponent
},
{
    path: 'auth/login',
    component: LoginComponent
},
{
    path: 'signup',
    component: RegisterComponent
},
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{ 
    path: 'add',
 component: CreateProductComponent
},
{
    path:'product',
    component:ProductDetailsComponent
},{
    path:'contact',
    component:ContactComponent
},{
    path:'product/:id',
    component:RpoductDetailsComponent
},{
    path:'cart',
    component:CartComponent
},{
    path:'cart/delete',
    component:CartDeleteComponent
},{
    path:'guest',
    component:GuestComponent
},{
    path:'findbyproductname',
    component:SearchProductComponent
},{
    path:'adfindbyproductname',
    component:SearchAdminProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
