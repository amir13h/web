import { Routes } from '@angular/router';
import { HomeComponent } from './+paige/home/home.component';
import { AboutComponent } from './+paige/about/about.component';
import { ProductsComponent } from './+paige/products/products.component';
import { ServicesComponent } from './+paige/services/services.component';
import { LoginComponent } from './+paige/login/login.component';
import { SignupComponent } from './+paige/signup/signup.component';

export const routes: Routes = [
    {path:'home' , component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'products',component:ProductsComponent},
    {path:'services',component:ServicesComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
