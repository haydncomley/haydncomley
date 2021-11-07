import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectItemHeaderModule } from 'src/app/components/projects/project-item-header/project-item-header.module';
import { ProjectItemHeaderComponent } from 'src/app/components/projects/project-item-header/project-item-header.component';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,

    // Project Components
    ProjectItemHeaderModule
  ],
  exports: [ProjectComponent],
})
export class ProjectModule { }
