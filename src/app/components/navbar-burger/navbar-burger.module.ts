import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBurgerComponent } from './navbar-burger.component';



@NgModule({
  declarations: [NavbarBurgerComponent],
  imports: [
    CommonModule,
  ],
  exports: [NavbarBurgerComponent],
})
export class NavbarBurgerModule { }
