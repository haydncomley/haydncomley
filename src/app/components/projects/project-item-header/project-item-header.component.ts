import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
	selector: 'app-project-item-header',
	styleUrls: ['./project-item-header.component.scss'],
	templateUrl: './project-item-header.component.html'
})
export class ProjectItemHeaderComponent implements ProjectItemBase, OnInit {

	public project: IProject;

  @Input() header = '';
  @Input() subtitle = '';
  @Input() background = '';
  @Input() slim = false;

  constructor() { }

  ngOnInit(): void {
  }

}
