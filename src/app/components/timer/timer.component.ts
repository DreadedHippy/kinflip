import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  minutes = 60;
  hours = 10;

  ngOnInit(): void {
    this.countDown()
  }

  countDown() {
    let counter = 60;
    let $counter  = new Observable<number>((count) => {
      setInterval( () => {
        counter > 1 ? counter-- : counter = 60;
        count.next(counter)
        // console.log(counter)
      }, 60000)
    })
    $counter.subscribe((count) => this.minutes = count);

    let hourCounter = 10;
    let $hours = new Observable<number>((hour) => {
      setInterval(() => {
        hourCounter > 1 ? hourCounter -- : hourCounter = 60;
        hour.next(hourCounter)
      }, 1000 * 60 * 60);
    });
    $hours.subscribe((count) => this.hours = count)
  }
}
