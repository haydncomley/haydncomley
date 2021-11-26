import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllPrototypes } from 'src/app/data/data-prototypes';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectSelectionService } from 'src/app/services/project-selection.service';

@Component({
  selector: 'app-prototypes',
  templateUrl: './prototypes.component.html',
  styleUrls: ['./prototypes.component.scss']
})
export class PrototypesComponent implements OnInit, OnDestroy {

  selected: IProject = null;
  selectedProjectSub: Subscription;

  projects: IProject[] = AllPrototypes;

  header = 'Prototypes';
  subtitle = ''

  constructor(
    private projectService: ProjectSelectionService
  ) { }

  ngOnInit(): void {
    this.selectedProjectSub = this.projectService.getSelectedProject().subscribe((e) => this.selected = e);
  }

  ngOnDestroy() {
    if (this.selectedProjectSub) { this.selectedProjectSub.unsubscribe(); }
  }

  trackByProject(index: number, item: IProject) {
    return item.name;
  }

}
