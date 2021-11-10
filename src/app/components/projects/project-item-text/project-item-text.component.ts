import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
  selector: 'app-project-item-text',
  templateUrl: './project-item-text.component.html',
  styleUrls: ['./project-item-text.component.scss']
})
export class ProjectItemTextComponent implements ProjectItemBase, OnInit {

  public project: IProject;

  public text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
