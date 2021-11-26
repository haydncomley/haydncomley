import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProjectPaneModule } from 'src/app/components/project-pane/project-pane.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ProjectPaneModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
