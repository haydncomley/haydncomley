import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageBackgroundComponent } from './image-background.component';



@NgModule({
	declarations: [ImageBackgroundComponent],
	exports: [ImageBackgroundComponent],
	imports: [
		CommonModule
	]
})
export class ImageBackgroundModule { }
