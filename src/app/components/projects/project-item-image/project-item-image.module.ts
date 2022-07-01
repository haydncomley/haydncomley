import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemImageComponent } from './project-item-image.component';
import { ImageBackgroundModule } from '../../image-background/image-background.module';



@NgModule({
	declarations: [ProjectItemImageComponent],
	exports: [ProjectItemImageComponent],
	imports: [
		CommonModule,
		ImageBackgroundModule
	],
})
export class ProjectItemImageModule { }
