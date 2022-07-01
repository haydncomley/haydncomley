import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-background',
	styleUrls: ['./image-background.component.scss'],
	templateUrl: './image-background.component.html'
})
export class ImageBackgroundComponent implements OnInit {

  @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
