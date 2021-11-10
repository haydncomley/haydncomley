import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemGalleryComponent } from './project-item-gallery.component';
import { NavbarBurgerModule } from '../../navbar-burger/navbar-burger.module';



@NgModule({
  declarations: [ProjectItemGalleryComponent],
  imports: [
    CommonModule,

    NavbarBurgerModule
  ],
  exports: [ProjectItemGalleryComponent],
})
export class ProjectItemGalleryModule { }
