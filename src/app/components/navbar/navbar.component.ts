import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';
import { INavPage } from 'src/app/interfaces/INavPage';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ProjectSelectionService } from 'src/app/services/project-selection.service';
import { IProject } from 'src/app/interfaces/IProject';

@Component({
	selector: 'app-navbar',
	styleUrls: ['./navbar.component.scss'],
	templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {

	SELECTED_ANIMATION_TIME = 400;

  @ViewChild('navbar') navbarElement: ElementRef<HTMLElement>;

  @Input() slim = false;
  slimPage = false;

  thisYear = '';
  currentPage: INavPage;
  selectedProject: IProject;
  navDetails: any;

  projectSelectionSub: Subscription;
  routerSub: Subscription;

  timeout;

  backButton = false;

  pages: INavPage[] = [
  	{
  		label: 'Projects',
  		route: '/'
  	},
  	// {
  	//   label: 'Prototypes',
  	//   route: '/prototypes'
  	// },
  	{
  		label: 'About',
  		route: '/about'
  	},
  	// {
  	//   label: 'Contact',
  	//   route: '/contact'
  	// }
  ];

  mobileShown = false;
  dragStart = null;
  dragStartTop = null;
  dragAmount = 0;
  dragReset = false;

  constructor(
    private router: Router,
    private projectSelectionService: ProjectSelectionService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  	this.thisYear = moment().format('YYYY');

  	this.routerSub = this.router.events.pipe(
  		filter((e) => e instanceof NavigationEnd)
  	).subscribe((e: NavigationEnd) => {
  		this.checkPage();
  	});

  	this.checkPage();
  	this.createMobileGestures();
  }

  ngAfterViewInit() {
  	this.projectSelectionSub = this.projectSelectionService.getSelectedProject().subscribe((e) => {
  		const changed = (!!this.selectedProject) != (!!e);
  		const listItem = document.querySelector<HTMLElement>('#selectedProject');
  		listItem.style.maxHeight = (e ? '4rem' : '0px');
  		listItem.style.padding = (e ? null : 0 + 'px');
  		listItem.style.opacity = (e ? '1' : '0');
  		listItem.style.setProperty('--project-primary', (e ? `${e.theme.primary}` : null));
  		// listItem.style.background = (e ? `rgba(${e.theme.primary}, .25)` : null);

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
  	});
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
  	if (!this.currentPage && !location.pathname.includes('/pro') && !this.selectedProject) {
  		this.selectPage(this.pages[0]);
  	} else {
  		if (this.selectedProject) {
  			this.currentPage = null;
  		}
  	}

  	if (!this.route.firstChild) return;

  	this.slimPage = this.route.firstChild.snapshot.data['slimNavigation'];
  	const details = this.route.firstChild.snapshot.data['details'];

  	setTimeout(() => {
  		requestAnimationFrame(() => {
  			this.navDetails = details;
  		});
  	}, !details ? this.SELECTED_ANIMATION_TIME : 0);

  }

  selectPage(page: INavPage) {
  	this.projectSelectionService.selectProject(null);
  	this.router.navigate([page.route]);
  	this.toggleMobileDrawer(false, false);
  }

  toggleMobileDrawer(show?: boolean, checkRoute = true, forceMobile?) {
  	if (this.selectedProject && checkRoute) {
  		this.projectSelectionService.selectProject(null);
  		this.router.navigate([location.pathname.includes('prototype') ? '/prototypes' : '/']);
  		this.backButton = false;

  		if (forceMobile !== undefined) this.mobileShown = forceMobile;
  		return;
  	}

  	if (show === undefined) show = !this.mobileShown;
  	this.mobileShown = show;
  }

  createMobileGestures() {
  	window.addEventListener('touchend', (e) => {
  		if (Math.abs(this.dragAmount) > this.navbarElement.nativeElement.getBoundingClientRect().width * .10) {
  			this.mobileShown = !this.mobileShown && (this.dragAmount > 0);
  		}

  		this.dragAmount = 0;
  		this.dragStart = null;
  		this.dragStartTop = null;
  		this.renderer.removeStyle(this.navbarElement.nativeElement, 'transition');
  		this.renderer.removeStyle(this.navbarElement.nativeElement, 'transform');
  		this.dragReset = false;
  	});

  	window.addEventListener('touchmove', (e) => {
  		if (!this.dragStartTop) this.dragStartTop = e.touches[0].clientY;
  		if (Math.abs(e.touches[0].clientY - this.dragStartTop) > 10 && Math.abs(this.dragAmount) < 10) {
  			this.dragReset = true;
  			this.dragAmount = 0;
  			this.dragStart = null;
  			this.renderer.removeStyle(this.navbarElement.nativeElement, 'transition');
  			this.renderer.removeStyle(this.navbarElement.nativeElement, 'transform');
  		}

  		if (this.dragReset) return;

  		if (this.mobileShown) {
  			e.preventDefault();
  			if (!this.dragStart) this.dragStart = e.touches[0].clientX;

  			this.dragAmount = Math.min(e.touches[0].clientX - this.dragStart, 0);
  			this.renderer.setStyle(this.navbarElement.nativeElement, 'transition', 'none');
  			this.renderer.setStyle(this.navbarElement.nativeElement, 'transform', `translateX(${this.dragAmount}px)`);
  		} else {
  			if (!this.dragStart) this.dragStart = e.touches[0].clientX;
  			this.dragAmount = Math.min(e.touches[0].clientX - this.dragStart, this.navbarElement.nativeElement.getBoundingClientRect().width);

  			if (this.dragAmount < 10) return;
  			e.preventDefault();

  			this.renderer.setStyle(this.navbarElement.nativeElement, 'transition', 'none');
  			this.renderer.setStyle(this.navbarElement.nativeElement, 'transform', `translateX(calc(-100% + ${this.dragAmount}px))`);
  		}
  	}, { passive: false });
  }

}
