import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar-burger',
	styleUrls: ['./navbar-burger.component.scss'],
	templateUrl: './navbar-burger.component.html'
})
export class NavbarBurgerComponent implements OnInit {

  @Input() isBack = false;

  constructor() { }

  ngOnInit(): void {
  }

}
