import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendee-button',
  templateUrl: './attendee-button.component.html',
  styleUrls: ['./attendee-button.component.scss']
})
export class AttendeeButtonComponent {

  constructor(private router: Router){}

  registerAsAttendee(){
    this.router.navigate(['/attendee'])
  }
}
