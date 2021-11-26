import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrototypesComponent } from './prototypes.component';
import { ProjectPaneModule } from 'src/app/components/project-pane/project-pane.module';
import { ProjectItemHeaderModule } from 'src/app/components/projects/project-item-header/project-item-header.module';



@NgModule({
  declarations: [PrototypesComponent],
  imports: [
    CommonModule,
    ProjectPaneModule,
    ProjectItemHeaderModule
  ],
  exports: [PrototypesComponent],
})
export class PrototypesModule { }
