import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { AllProjects } from '../data/data-projects';
import { IProject } from '../interfaces/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectSelectionService {

  private projectSelected = new BehaviorSubject<IProject>(null);
  private scrollChange = new BehaviorSubject<number>(0);

  constructor(
    private router: Router,
    private title: Title
  ) { this.setupRouteEvents(); }

  /**
   * @description Setups route events
   */
  private setupRouteEvents() {
    this.router.events.pipe(filter((x) => {
      if ((x as any).navigationTrigger !== 'popstate') return false;
      return true;
    })).subscribe((e: NavigationStart) => {
      this.checkURLForProject();
    })

    this.router.events.pipe(filter((x) => x instanceof NavigationEnd), first()).toPromise().then(async (e: NavigationEnd) => {
      this.checkURLForProject();
    });
  }

  /**
   * @description Checks url for selected project and selects if need be.
   */
  private checkURLForProject() {
    const urlSplit = decodeURI(location.pathname).split('/');

    if (urlSplit.length >= 3 && urlSplit[1] === 'project') {
      const project = AllProjects.find((x) => x.name.toLowerCase() == urlSplit[2]);
      this.selectProject(project)
    } else {
      this.selectProject(null);
    }
  }

  /**
   * @description Selects project
   * @param project
   */
  public selectProject(project: IProject) {
    this.projectSelected.next(project);

    this.title.setTitle(project ? `Haydn Comley - ${project.name}` : `Haydn Comley`)
  }

  /**
   * @description Gets selected project listener
   * @returns
   */
  public getSelectedProject() {
    return this.projectSelected.asObservable();
  }

  /**
   * @description Sets scroll position
   * @param num 
   */
  public setScrollPos(num: number) {
    this.scrollChange.next(num);
  }

  /**
   * @description Gets scroll position
   * @returns  
   */
  public getScrollPos() {
    return this.scrollChange.asObservable();
  }

}
