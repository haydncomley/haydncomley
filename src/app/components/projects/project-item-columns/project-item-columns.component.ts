import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IProject, ProjectContentItem } from 'src/app/interfaces/IProject';
import { ProjectItemBase } from '../project-item-base.component';

@Component({
  selector: 'app-project-item-columns',
  templateUrl: './project-item-columns.component.html',
  styleUrls: ['./project-item-columns.component.scss']
})
export class ProjectItemColumnsComponent implements ProjectItemBase, AfterViewInit {

  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;

  public project: IProject;

  public items: ProjectContentItem[];
  public minWidth: string = '';
  public center: boolean = true;

  constructor(
    private factoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.viewContainer.clear();

      this.items.forEach((component) => {
        const factory = this.factoryResolver.resolveComponentFactory(component.component)
        const view = this.viewContainer.createComponent(factory);
        const propKeys = Object.keys(component.props);

        propKeys.forEach(key => {
          view.instance[key] = component.props[key];
        });
        view.instance['project'] = this.project;

        (view.location.nativeElement as HTMLElement).style.flex = '1';

        if (this.minWidth) {
          (view.location.nativeElement as HTMLElement).style.minWidth = this.minWidth;
        }
      });
    })
  }

}
