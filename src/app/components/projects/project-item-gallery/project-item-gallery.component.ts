import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { swipeAnimation } from 'src/app/animations/swipe.animation';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
	animations: [swipeAnimation, slideAnimation],
	selector: 'app-project-item-gallery',
	styleUrls: ['./project-item-gallery.component.scss'],
	templateUrl: './project-item-gallery.component.html'
})
export class ProjectItemGalleryComponent implements ProjectItemBase, OnInit, OnDestroy {

	public project: IProject;

  @Input() images: string[] = [];
  @Input() selected = 0;
  @Input() interval = 5000;
  @Input() height = 'auto';
  @Input() maxHeight = null;
  @Input() fit = 'contain';
  @Input() position = 'center';
  @Input() animation = 'swipe';

  direction = 'right';
  safeImages: SafeResourceUrl[] = [];
  timeout: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  	this.play();

  	this.images.forEach((e) => {
  		const img = new Image();
  		img.src = e;

  		this.safeImages.push(this.sanitizer.bypassSecurityTrustResourceUrl(e));
  	});
  }

  ngOnDestroy() {
  	this.pause();
  }

  nextSlide(dir: number) {
  	this.direction = dir < 0 ? 'left' : 'right';
  	requestAnimationFrame(() => {
  		let next = this.selected += dir;
  		if (next < 0) next = this.images.length - 1;
  		if (next >= this.images.length) next = 0;
  		this.selected = next;
  	});
  }

  selectPage(num: number) {
  	this.nextSlide(num - this.selected);
  }

  pause() {
  	if (this.timeout) { clearInterval(this.timeout); }
  }

  play() {
  	if (this.interval && this.images.length > 1) {
  		this.timeout = setInterval(() => this.nextSlide(1), this.interval);
  	}
  }

}
