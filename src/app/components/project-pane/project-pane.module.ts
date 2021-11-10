import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPaneComponent } from './project-pane.component';
import { NavbarBurgerModule } from '../navbar-burger/navbar-burger.module';
import { ChipModule } from '../chip/chip.module';



@NgModule({
  declarations: [ProjectPaneComponent],
  imports: [
    CommonModule,

    NavbarBurgerModule,
    ChipModule
  ],
  exports: [ProjectPaneComponent],
})
export class ProjectPaneModule { }
