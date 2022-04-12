import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from 'pages/home/homepage';
import { CartComp } from 'src/comps/cart/cart';
import { NavComp } from 'src/comps/nav/nav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Login } from 'pages/login/login';
import { HomeLayComp } from 'src/comps/homelay/homelay';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NavComp,
    CartComp,
    Login,
    HomeLayComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
