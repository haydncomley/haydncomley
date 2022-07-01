import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBurgerComponent } from './navbar-burger.component';



@NgModule({
	declarations: [NavbarBurgerComponent],
	exports: [NavbarBurgerComponent],
	imports: [
		CommonModule,
	],
})
export class NavbarBurgerModule { }
