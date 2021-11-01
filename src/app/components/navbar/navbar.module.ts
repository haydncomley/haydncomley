import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BannerModule } from '../banner/banner.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BannerModule
  ],
  exports: [NavbarComponent],
})
export class NavbarModule { }
