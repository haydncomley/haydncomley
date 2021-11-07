import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-burger',
  templateUrl: './navbar-burger.component.html',
  styleUrls: ['./navbar-burger.component.scss']
})
export class NavbarBurgerComponent implements OnInit {

  @Input() isBack = false;

  constructor() { }

  ngOnInit(): void {
  }

}
