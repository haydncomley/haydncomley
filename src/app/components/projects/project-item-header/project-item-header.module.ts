import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemHeaderComponent } from './project-item-header.component';
import { ImageBackgroundModule } from '../../image-background/image-background.module';



@NgModule({
  declarations: [ProjectItemHeaderComponent],
  imports: [
    CommonModule,
    ImageBackgroundModule
  ],
  exports: [ProjectItemHeaderComponent],
})
export class ProjectItemHeaderModule { }
