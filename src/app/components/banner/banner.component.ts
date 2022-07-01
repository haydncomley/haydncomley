import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner',
	styleUrls: ['./banner.component.scss'],
	templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {

  @Input() header = 'Haydn Comley';
  @Input() subtitle = 'Design & Development';

  @Input() center = false;

  constructor() { }

  ngOnInit(): void {
  }

}
