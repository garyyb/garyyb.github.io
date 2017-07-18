import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AboutComponent } from "./about.component";
import { PortfolioBaseComponent } from "./portfolio-base.component";

const router = RouterModule.forRoot([
  {
    path      : 'about',
    component : AboutComponent,
  },
  {
    path      : 'portfolio',
    component : PortfolioBaseComponent,
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioBaseComponent,
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
