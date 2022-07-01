import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemTextComponent } from './project-item-text.component';



@NgModule({
	declarations: [ProjectItemTextComponent],
	exports: [ProjectItemTextComponent],
	imports: [
		CommonModule
	],
})
export class ProjectItemTextModule { }
