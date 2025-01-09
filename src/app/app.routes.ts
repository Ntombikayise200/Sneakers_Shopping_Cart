import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/ProductComponent';

export const routes: Routes = [
    {path:'',component: NavbarComponent},
    {path:'Cart', component: CartComponent },
    {path:'Product',component:ProductComponent}
    
];
