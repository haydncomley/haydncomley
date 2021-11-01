import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HelixArt } from 'src/app/generation/HelixArt';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectSelectionService } from 'src/app/services/project-selection.service';

@Component({
  selector: 'app-project-pane',
  templateUrl: './project-pane.component.html',
  styleUrls: ['./project-pane.component.scss']
})
export class ProjectPaneComponent implements OnInit {

  @Input() project: IProject;
  @Input() offset: number = 0;

  helix: string;

  constructor(
    private projectService: ProjectSelectionService,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    this.helix = await HelixArt.Generate({ x: 500, y: 500 }, Math.floor(Math.random() * 4) + 2);
  }

  async selectProject() {
    this.projectService.selectProject(this.project);
    this.router.navigate([`/project/${this.project.name.toLowerCase()}`]);
  }

}
