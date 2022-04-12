import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from 'pages/home/homepage';
import { Login } from 'pages/login/login';
import { CartComp } from 'src/comps/cart/cart';

import { NavComp } from 'src/comps/nav/nav';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'nav', component: NavComp },
  { path: 'cart', component: CartComp},
  { path: 'login', component: Login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
