/**
 * Created by Gary on 18-Jul-17.
 */

import { Component } from '@angular/core';

@Component({
  selector    : 'portfolio',
  templateUrl : './templates/portfolio-base.component.html',
  styleUrls   : []
})

export class PortfolioBaseComponent {
  public selected : string;

  public select(s : string) : void {
    this.selected = s;
  }

  public unselect() : void {
    this.selected = null;
  }
}
