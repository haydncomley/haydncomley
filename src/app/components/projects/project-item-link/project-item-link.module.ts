import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemLinkComponent } from './project-item-link.component';
import { NavbarBurgerModule } from '../../navbar-burger/navbar-burger.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';



@NgModule({
  declarations: [ProjectItemLinkComponent],
  imports: [
    CommonModule,
    SharedDirectivesModule,

    NavbarBurgerModule
  ],
  exports: [ProjectItemLinkComponent],
})
export class ProjectItemLinkModule { }
