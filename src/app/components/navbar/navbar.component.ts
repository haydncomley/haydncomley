import { AfterContentInit, AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';
import { INavPage } from 'src/app/interfaces/INavPage';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ProjectSelectionService } from 'src/app/services/project-selection.service';
import { IProject } from 'src/app/interfaces/IProject';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('navbar') navbarElement: ElementRef;

  thisYear: string = '';
  currentPage: INavPage;
  selectedProject: IProject;

  projectSelectionSub: Subscription;
  routerSub: Subscription;

  pages: INavPage[] = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'About',
      route: '/about'
    }
  ];

  mobileShown = false;

  constructor(
    private router: Router,
    private projectSelectionService: ProjectSelectionService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.thisYear = moment().format('YYYY');

    this.routerSub = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.checkPage();
    });

    this.checkPage();
  }

  ngAfterViewInit() {
    this.projectSelectionSub = this.projectSelectionService.getSelectedProject().subscribe((e) => {
      this.ngZone.run(() => { })
      requestAnimationFrame(() => {
        this.selectedProject = e;
        this.adjustNavbarWidth();
      });
    })
  }

  adjustNavbarWidth() {
    console.log(!!this.selectedProject, this.navbarElement.nativeElement.scrollWidth)
    if (this.navbarElement) {
      // this.navbarElement.nativeElement.style.width = !!this.selectedProject ? '3rem' : this.navbarElement.nativeElement.scrollWidth + 'px';
    }
  }

  ngOnDestroy() {
    if (this.routerSub) { this.routerSub.unsubscribe(); }
    if (this.projectSelectionSub) { this.projectSelectionSub.unsubscribe(); }
  }

  checkPage() {
    this.currentPage = this.pages.find((x) => x.route === location.pathname);
    if (!this.currentPage && !location.pathname.includes('/project') && !this.selectedProject) {
      this.selectPage(this.pages[0]);
    } else {
      if (this.selectedProject) {
        this.currentPage = null;
      }
    }
  }

  selectPage(page: INavPage) {
    this.projectSelectionService.selectProject(null);
    this.router.navigate([page.route]);
    this.toggleMobileDrawer(false);
  }

  toggleMobileDrawer(show?: boolean) {
    console.log(show);
    if (show === undefined) show = !this.mobileShown;
    this.mobileShown = show;
  }

}
