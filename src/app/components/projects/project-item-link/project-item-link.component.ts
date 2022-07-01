import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
	selector: 'app-project-item-link',
	styleUrls: ['./project-item-link.component.scss'],
	templateUrl: './project-item-link.component.html'
})
export class ProjectItemLinkComponent implements ProjectItemBase, OnInit {

	public project: IProject;

  @Input() header: string;
  @Input() link: string;
  @Input() filled = false;

  get isLocal() {
  	return !(this.link || '').startsWith('http');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  open() {
  	if (this.isLocal) {
  		this.router.navigate([this.link]);
  	} else {
  		window.open(this.link, '_blank');
  	}
  }

}
