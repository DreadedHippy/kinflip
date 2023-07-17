import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent {

  constructor(private router: Router) {

  }
  nameInput = "";
  emailInput = "";
  showSuccessPopUp(){
    let popup = document.getElementById("popup");

    if (popup){
      popup.style.opacity = "1";
      popup.style.visibility = "visible"
    }

    this.nameInput = "";
    this.emailInput = "";
  }

  closePopup(){
    let popup = document.getElementById("popup");

    if (popup){
      popup.style.opacity = "0";
      popup.style.visibility = "hidden"
    }

    this.router.navigate(['/'])
  }
}
