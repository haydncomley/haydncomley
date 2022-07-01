import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemGalleryComponent } from './project-item-gallery.component';
import { NavbarBurgerModule } from '../../navbar-burger/navbar-burger.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';



@NgModule({
	declarations: [ProjectItemGalleryComponent],
	exports: [ProjectItemGalleryComponent],
	imports: [
		CommonModule,
		SharedDirectivesModule,

		NavbarBurgerModule
	],
})
export class ProjectItemGalleryModule { }
