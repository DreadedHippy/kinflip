import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker-button',
  templateUrl: './speaker-button.component.html',
  styleUrls: ['./speaker-button.component.scss']
})
export class SpeakerButtonComponent {

  constructor(private router: Router){}

  registerAsSpeaker(){
    this.router.navigate(['/speaker'])
  }

}
