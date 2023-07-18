import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent {

  constructor(private router: Router){}

  speakerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", Validators.required),
    phoneNumber: new FormControl(""),
    country: new FormControl(""),
    brand: new FormControl(""),
    social: new FormControl("")
  });

  showSuccessPopUp(){
    let popup = document.getElementById("popup");

    if (this.speakerForm.invalid) {
      console.log("Invalid")
      return;
    }

    if (popup){
      popup.style.opacity = "1";
      popup.style.visibility = "visible"
    }
    this.speakerForm.reset();
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
