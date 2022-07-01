import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ProjectItemHeaderModule } from 'src/app/components/projects/project-item-header/project-item-header.module';



@NgModule({
	declarations: [AboutComponent],
	exports: [AboutComponent],
	imports: [
		CommonModule,
		ProjectItemHeaderModule
	],
})
export class AboutModule { }
