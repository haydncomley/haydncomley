import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { fadeAnimation } from 'src/app/animations/fade.animation';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { swipeAnimation } from 'src/app/animations/swipe.animation';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
  selector: 'app-project-item-gallery',
  templateUrl: './project-item-gallery.component.html',
  styleUrls: ['./project-item-gallery.component.scss'],
  animations: [swipeAnimation, slideAnimation]
})
export class ProjectItemGalleryComponent implements ProjectItemBase, OnInit, OnDestroy {

  public project: IProject;

  public images: string[] = [];
  public selected = 0;
  public interval = 5000;
  public height = 'auto';
  public fit = 'contain';
  public animation = 'swipe';

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
    })
  }

  selectPage(num: number) {
    this.nextSlide(num - this.selected)
  }

  pause() {
    if (this.timeout) { clearInterval(this.timeout); }
  }

  play() {
    if (this.interval) {
      this.timeout = setInterval(() => this.nextSlide(1), this.interval);
    }
  }

}
