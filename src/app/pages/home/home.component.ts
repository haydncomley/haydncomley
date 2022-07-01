import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllProjects } from 'src/app/data/data-projects';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectSelectionService } from 'src/app/services/project-selection.service';

@Component({
	selector: 'app-home',
	styleUrls: ['./home.component.scss'],
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

	selected: IProject = null;
	selectedProjectSub: Subscription;

	projects: IProject[] = AllProjects;

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
