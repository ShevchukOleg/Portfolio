import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ControlAccessService } from './global-services/control-access.service';
import * as $ from 'jquery';
import { RouterOutlet } from '@angular/router';
import { slideAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideAnimation ]
})
export class AppComponent implements OnInit {
  public title = 'portfolio';
  public showHeader: boolean;

  constructor(
    private access: ControlAccessService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.access.keeper();
      }
    });
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData &&
          outlet.activatedRouteData['animation'];
  }
}
