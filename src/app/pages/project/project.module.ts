import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectItemHeaderModule } from 'src/app/components/projects/project-item-header/project-item-header.module';
import { ProjectItemHeaderComponent } from 'src/app/components/projects/project-item-header/project-item-header.component';
import { ProjectItemParagraphModule } from 'src/app/components/projects/project-item-paragraph/project-item-paragraph.module';
import { ProjectItemColumnsModule } from 'src/app/components/projects/project-item-columns/project-item-columns.module';
import { ProjectItemTextModule } from 'src/app/components/projects/project-item-text/project-item-text.module';
import { ProjectItemBreakModule } from 'src/app/components/projects/project-item-break/project-item-break.module';
import { ProjectItemImageModule } from 'src/app/components/projects/project-item-image/project-item-image.module';
import { ProjectItemLinkModule } from 'src/app/components/projects/project-item-link/project-item-link.module';
import { ProjectItemGalleryModule } from 'src/app/components/projects/project-item-gallery/project-item-gallery.module';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,

    // Project Components
    ProjectItemHeaderModule,
    ProjectItemParagraphModule,
    ProjectItemColumnsModule,
    ProjectItemTextModule,
    ProjectItemBreakModule,
    ProjectItemImageModule,
    ProjectItemLinkModule,
    ProjectItemGalleryModule
  ],
  exports: [ProjectComponent],
})
export class ProjectModule { }
