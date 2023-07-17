import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  openMenu() {
    let menu = document.getElementById("menu");

    if (menu) {
      menu.style.left = "0";
    }
  }

  closeMenu() {
    let menu = document.getElementById("menu");

    if (menu) {
      menu.style.left = "100%";
    }
  }
}
