import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
  selector: 'app-project-item-link',
  templateUrl: './project-item-link.component.html',
  styleUrls: ['./project-item-link.component.scss']
})
export class ProjectItemLinkComponent implements ProjectItemBase, OnInit {

  public project: IProject;

  @Input() header: string;
  @Input() link: string;
  @Input() filled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
