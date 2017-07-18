import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AboutComponent } from "./about.component";

const router = RouterModule.forRoot([
  {
    path      : 'about',
    component : AboutComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
