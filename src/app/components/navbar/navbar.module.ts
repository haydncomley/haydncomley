import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BannerModule } from '../banner/banner.module';
import { NavbarBurgerModule } from '../navbar-burger/navbar-burger.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';



@NgModule({
	declarations: [NavbarComponent],
	exports: [NavbarComponent],
	imports: [
		CommonModule,
		SharedDirectivesModule,

		BannerModule,
		NavbarBurgerModule
	],
})
export class NavbarModule { }
