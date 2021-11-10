import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  SELECTED_ANIMATION_TIME = 400;

  @ViewChild('navbar') navbarElement: ElementRef<HTMLElement>;

  @Input() slim: boolean = false;

  thisYear: string = '';
  currentPage: INavPage;
  selectedProject: IProject;

  projectSelectionSub: Subscription;
  routerSub: Subscription;

  timeout;

  backButton = false;

  pages: INavPage[] = [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'About',
      route: '/about'
    },
    {
      label: 'Contact',
      route: '/contact'
    }
  ];

  mobileShown = false;

  constructor(
    private router: Router,
    private projectSelectionService: ProjectSelectionService,
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
      const changed = (!!this.selectedProject) != (!!e);
      const listItem = document.querySelector<HTMLElement>('#selectedProject');
      listItem.style.maxHeight = (e ? '4rem' : '0px');
      listItem.style.padding = (e ? null : 0 + 'px');
      listItem.style.opacity = (e ? '1' : '0');
      listItem.style.background = (e ? `rgba(${e.theme.primary}, .25)` : null);

      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }

      this.backButton = !!e;

      this.timeout = setTimeout(() => {
        requestAnimationFrame(() => {
          this.selectedProject = e;
          this.adjustNavbarWidth();
          this.checkPage();

        });
      }, !e ? this.SELECTED_ANIMATION_TIME : 0);
    })
  }

  adjustNavbarWidth() {
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
    this.toggleMobileDrawer(false, false);
  }

  toggleMobileDrawer(show?: boolean, checkRoute = true) {
    if (this.selectedProject && checkRoute) {
      this.projectSelectionService.selectProject(null);
      this.router.navigate(['/']);
      this.backButton = false;
      return;
    }

    if (show === undefined) show = !this.mobileShown;
    this.mobileShown = show;
  }

}