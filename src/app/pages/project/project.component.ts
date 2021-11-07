import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { first } from 'rxjs/operators';
import { IProject } from 'src/app/interfaces/IProject';
import { ProjectSelectionService } from 'src/app/services/project-selection.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private projectSelectionService: ProjectSelectionService
  ) { }

  ngOnInit(): void {
    this.projectSelectionService.getSelectedProject().pipe(first()).toPromise().then((e) => this.loadProject(e));
  }

  loadProject(project: IProject) {
    this.viewContainer.clear();

    project.content.forEach((contentItem) => {
      const factory = this.factoryResolver.resolveComponentFactory(contentItem.component)
      const view = this.viewContainer.createComponent(factory);
      const propKeys = Object.keys(contentItem.props);

      propKeys.forEach(key => {
        view.instance[key] = contentItem.props[key];
      });
      view.instance['project'] = project;
    });
  }
}
