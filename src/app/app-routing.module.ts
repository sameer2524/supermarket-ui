import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';


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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
