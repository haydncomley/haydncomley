import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() header = 'Haydn Comley';
  @Input() subtitle = 'Design & Development';

  @Input() center = false;

  constructor() { }

  ngOnInit(): void {
  }

}
