import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemImageComponent } from './project-item-image.component';
import { ImageBackgroundModule } from '../../image-background/image-background.module';



@NgModule({
  declarations: [ProjectItemImageComponent],
  imports: [
    CommonModule,
    ImageBackgroundModule
  ],
  exports: [ProjectItemImageComponent],
})
export class ProjectItemImageModule { }
