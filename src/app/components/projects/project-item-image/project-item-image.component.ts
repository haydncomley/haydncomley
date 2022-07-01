import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
	selector: 'app-project-item-image',
	styleUrls: ['./project-item-image.component.scss'],
	templateUrl: './project-item-image.component.html'
})
export class ProjectItemImageComponent implements ProjectItemBase, OnInit {

	public project: IProject;

  @Input() set image(value: string) {
		this.imageSrc = this.sanitiser.bypassSecurityTrustResourceUrl(value);
	}
  imageSrc: SafeResourceUrl;

  constructor(
    private sanitiser: DomSanitizer
  ) { }

  ngOnInit(): void { }

}
