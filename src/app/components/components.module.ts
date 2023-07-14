import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpeakerButtonComponent } from './speaker-button/speaker-button.component';
import { AttendeeButtonComponent } from './attendee-button/attendee-button.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SpeakerButtonComponent, AttendeeButtonComponent, FooterComponent],
  exports: [HeaderComponent, SpeakerButtonComponent, AttendeeButtonComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
