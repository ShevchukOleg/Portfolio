import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-educational-projects',
  templateUrl: './educational-projects.component.html',
  styleUrls: ['./educational-projects.component.css']
})
export class EducationalProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(
      () => $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        center: true,
        nav: true,
        navElement: true,

      })
    );
  }

}
