import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
  selector: 'app-project-item-header',
  templateUrl: './project-item-header.component.html',
  styleUrls: ['./project-item-header.component.scss']
})
export class ProjectItemHeaderComponent implements ProjectItemBase, OnInit {

  public project: IProject;

  public header = '';
  public subtitle = '';
  public background = '';

  constructor() { }

  ngOnInit(): void {
  }

}
