import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { AllProjects } from '../data/data-projects';
import { IProject } from '../interfaces/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectSelectionService {

  private projectSelected = new BehaviorSubject<IProject>(null);

  constructor(
    private router: Router,
  ) {
    this.router.events.pipe(filter((x) => x instanceof NavigationEnd), first()).toPromise().then(async (e: NavigationEnd) => {
      const urlSplit = decodeURI(location.pathname).split('/');

      if (urlSplit.length >= 3 && urlSplit[1] === 'project') {
        const project = AllProjects.find((x) => x.name.toLowerCase() == urlSplit[2]);
        console.log(project);
        this.selectProject(project)
      }
    });
  }

  public selectProject(project: IProject) {
    this.projectSelected.next(project);
  }

  public getSelectedProject() {
    return this.projectSelected.asObservable();
  }
}
