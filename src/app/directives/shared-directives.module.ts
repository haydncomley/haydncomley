import { NgModule } from '@angular/core';
import { InteractDirective } from './interact.directive';

@NgModule({
	declarations: [
		InteractDirective
	],
	exports: [
		InteractDirective
	]
})
export class SharedDirectivesModule { }
