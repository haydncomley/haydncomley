import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
  selector: 'app-project-item-image',
  templateUrl: './project-item-image.component.html',
  styleUrls: ['./project-item-image.component.scss']
})
export class ProjectItemImageComponent implements ProjectItemBase, OnInit {

  public project: IProject;

  public image: string;
  imageSrc: SafeResourceUrl;

  constructor(
    private sanitiser: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.imageSrc = this.sanitiser.bypassSecurityTrustResourceUrl(this.image);
  }

}
