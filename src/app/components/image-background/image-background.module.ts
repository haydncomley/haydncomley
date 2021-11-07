import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageBackgroundComponent } from './image-background.component';



@NgModule({
  declarations: [ImageBackgroundComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageBackgroundComponent]
})
export class ImageBackgroundModule { }
