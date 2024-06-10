import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  ngAfterViewInit() {
    $('.sp').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: `<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>`,
      nextArrow: `<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>`
    });
  }
}
