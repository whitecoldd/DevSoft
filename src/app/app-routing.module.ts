import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from 'pages/home/homepage';
import { CartComp } from 'src/comps/cart/cart';
import { NavComp } from 'src/comps/nav/nav';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'nav', component: NavComp },
  { path: 'cart', component: CartComp}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
