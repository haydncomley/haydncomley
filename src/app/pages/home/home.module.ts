import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ProjectPaneModule } from 'src/app/components/project-pane/project-pane.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ProjectPaneModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
