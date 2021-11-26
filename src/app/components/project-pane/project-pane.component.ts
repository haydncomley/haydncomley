import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelixArt } from 'src/app/generation/HelixArt';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectSelectionService } from 'src/app/services/project-selection.service';

@Component({
  selector: 'app-project-pane',
  templateUrl: './project-pane.component.html',
  styleUrls: ['./project-pane.component.scss']
})
export class ProjectPaneComponent implements OnInit, OnDestroy {

  @Input() project: IProject;
  @Input() offset: number = 0;
  @Input() isLast: boolean = false;

  private scrollSub: Subscription;

  helix: string;
  pop: boolean = false;
  centerPercentage = 0;

  constructor(
    private projectService: ProjectSelectionService,
    private router: Router,
    private element: ElementRef<HTMLElement>
  ) { }

  async ngOnInit() {
    const isMobile = window.innerWidth < 600;
    const size = isMobile ? 300 : 500;

    this.helix = await HelixArt.Generate({ x: size, y: size }, Math.floor(Math.random() * 4) + 2, {
      startRGB: this.project.theme.tertiary || this.project.theme.primary,
      endRGB: this.project.theme.tertiary || this.project.theme.secondary,
      darkenPercentage: .9
    }, this.offset % 2 == 1);
    this.scrollSub = this.projectService.getScrollPos().subscribe((e) => this.scrollChange(e));
    this.project.tags = this.project.tags.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  }

  ngOnDestroy() {
    if (this.scrollSub) { this.scrollSub.unsubscribe(); }
  }

  scrollChange(num: number) {
    const bounds = this.element.nativeElement.getBoundingClientRect();
    this.pop = (bounds.top + bounds.height) < (window.innerHeight * .75);
  }

  async selectProject(e: MouseEvent) {
    if (e.target && (e.target as HTMLElement).className.includes('c-pane-live-badge')) return;

    this.projectService.selectProject(this.project);
    this.router.navigate([`/${location.pathname.includes('proto') ? 'prototypes' : 'project'}/${this.project.name.toLowerCase()}`]);
  }
}
