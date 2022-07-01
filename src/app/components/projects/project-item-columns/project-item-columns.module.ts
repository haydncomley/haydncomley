import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemColumnsComponent } from './project-item-columns.component';



@NgModule({
	declarations: [ProjectItemColumnsComponent],
	exports: [ProjectItemColumnsComponent],
	imports: [
		CommonModule
	],
})
export class ProjectItemColumnsModule { }
