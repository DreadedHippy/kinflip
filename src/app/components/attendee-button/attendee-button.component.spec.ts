import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeButtonComponent } from './attendee-button.component';

describe('AttendeeButtonComponent', () => {
  let component: AttendeeButtonComponent;
  let fixture: ComponentFixture<AttendeeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
