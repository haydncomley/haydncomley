import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pageAnimation } from './animations/page.animation';
import { IProject } from './interfaces/IProject';
import { ProjectSelectionService } from './services/project-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [pageAnimation]
})
export class AppComponent {

  slimNavbar = false;
  selected: IProject;

  constructor(
    private projectSelection: ProjectSelectionService
  ) {
    this.projectSelection.getSelectedProject().subscribe((e) => this.selected = e);
  }

  onScroll(e: Event) {
    const page = e.target as HTMLElement;
    this.slimNavbar = page.scrollTop > 0;
    if (!this.selected) {
      this.projectSelection.setScrollPos(page.scrollTop);
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

}
