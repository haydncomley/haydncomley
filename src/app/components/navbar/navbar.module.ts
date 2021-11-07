import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BannerModule } from '../banner/banner.module';
import { NavbarBurgerModule } from '../navbar-burger/navbar-burger.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BannerModule,

    NavbarBurgerModule
  ],
  exports: [NavbarComponent],
})
export class NavbarModule { }
