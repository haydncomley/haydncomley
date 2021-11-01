import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPaneComponent } from './project-pane.component';



@NgModule({
  declarations: [ProjectPaneComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectPaneComponent],
})
export class ProjectPaneModule { }
