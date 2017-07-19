import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AboutComponent } from "./about.component";
import { PortfolioBaseComponent } from "./portfolio-base.component";
import { PortfolioBarnetComponent } from "./portfolio-barnet.component";
import { PortfolioRobocupComponent } from "./portfolio-robocup.component";
import { PortfolioWitComponent } from "./portfolio-wit.component";
import { PortfolioBetaComponent } from "./portfolio-beta.component";
import { ContactComponent } from "./contact.component";

const router = RouterModule.forRoot([
  {
    path      : 'about',
    component : AboutComponent,
  },
  {
    path      : 'portfolio',
    component : PortfolioBaseComponent,
  },
  {
    path      : 'contact',
    component : ContactComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioBaseComponent,
    PortfolioBarnetComponent,
    PortfolioRobocupComponent,
    PortfolioWitComponent,
    PortfolioBetaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
