import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpeakerButtonComponent } from './speaker-button/speaker-button.component';
import { AttendeeButtonComponent } from './attendee-button/attendee-button.component';

@NgModule({
  declarations: [HeaderComponent, SpeakerButtonComponent, AttendeeButtonComponent],
  exports: [HeaderComponent, SpeakerButtonComponent, AttendeeButtonComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
