import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public status = false;
  constructor() { }

  ngOnInit() {
  }

  public navigationChange() {
    this.status = !this.status;
    setTimeout(() => {
      this.status = false;
    }, 6000);
  }

}
