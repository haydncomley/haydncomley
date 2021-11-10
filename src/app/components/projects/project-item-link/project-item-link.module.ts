import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemLinkComponent } from './project-item-link.component';
import { NavbarBurgerModule } from '../../navbar-burger/navbar-burger.module';



@NgModule({
  declarations: [ProjectItemLinkComponent],
  imports: [
    CommonModule,

    NavbarBurgerModule
  ],
  exports: [ProjectItemLinkComponent],
})
export class ProjectItemLinkModule { }
