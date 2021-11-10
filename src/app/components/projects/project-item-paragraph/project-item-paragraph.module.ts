import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemParagraphComponent } from './project-item-paragraph.component';
import { ProjectItemTextModule } from '../project-item-text/project-item-text.module';



@NgModule({
  declarations: [ProjectItemParagraphComponent],
  imports: [
    CommonModule,

    ProjectItemTextModule
  ],
  exports: [ProjectItemParagraphComponent],
})
export class ProjectItemParagraphModule { }
