import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from 'pages/home/homepage';
import { NavComp } from 'src/comps/nav/nav';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'nav', component: NavComp },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
