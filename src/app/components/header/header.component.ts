import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private router: Router){}

  nav(num: number) {
    switch(num) {
      case 1:
        this.router.navigate(['/#home'])
    }
  }

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
