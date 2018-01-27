import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';

const router = RouterModule.forRoot([
  // {
  //   path      : 'about',
  //   component : AboutComponent,
  // },
  // {
  //   path      : 'portfolio',
  //   component : PortfolioBaseComponent,
  // },
  // {
  //   path      : 'contact',
  //   component : ContactComponent
  // }
]);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
