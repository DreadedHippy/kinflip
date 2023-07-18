import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  minutes = 60;

  ngOnInit(): void {
    this.countDown()
  }

  countDown() {
    let counter = 60
    let $counter  = new Observable<number>((count) => {
      setInterval( () => {
        counter > 1 ? counter-- : counter = 60;
        count.next(counter)
        // console.log(counter)
      }, 1000)
    })
    $counter.subscribe((count) => this.minutes = count)
  }
}
