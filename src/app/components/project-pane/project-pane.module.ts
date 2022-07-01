import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPaneComponent } from './project-pane.component';
import { NavbarBurgerModule } from '../navbar-burger/navbar-burger.module';
import { ChipModule } from '../chip/chip.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';



@NgModule({
	declarations: [ProjectPaneComponent],
	exports: [ProjectPaneComponent],
	imports: [
		CommonModule,
		SharedDirectivesModule,

		NavbarBurgerModule,
		ChipModule
	],
})
export class ProjectPaneModule { }
