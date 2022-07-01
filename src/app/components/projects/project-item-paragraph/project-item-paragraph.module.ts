import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemParagraphComponent } from './project-item-paragraph.component';
import { ProjectItemTextModule } from '../project-item-text/project-item-text.module';



@NgModule({
	declarations: [ProjectItemParagraphComponent],
	exports: [ProjectItemParagraphComponent],
	imports: [
		CommonModule,

		ProjectItemTextModule
	],
})
export class ProjectItemParagraphModule { }
