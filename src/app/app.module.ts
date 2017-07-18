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
    PortfolioBarnetComponent,
    PortfolioRobocupComponent,
    PortfolioWitComponent,
    PortfolioBetaComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
