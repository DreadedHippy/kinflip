import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent {

  constructor(private router: Router) {}

  attendeeForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", Validators.required)
  });
  showSuccessPopUp(){
    let popup = document.getElementById("popup");

    if (this.attendeeForm.invalid) {
      console.log("Invalid")
      return;
    }

    if (popup){
      popup.style.opacity = "1";
      popup.style.visibility = "visible"
    }
    this.attendeeForm.reset();
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
