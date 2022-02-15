import { Component, Input, OnInit } from '@angular/core';
import Time from 'src/interfaces/Time';
import Timer from 'src/interfaces/Timer';
import { secondsToTime } from 'src/utils/date';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.css'],
})
export class TimerItemComponent implements OnInit {
  @Input() timer: Timer | null = null;

  time: Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  constructor() {}

  ngOnInit(): void {
    this.time = secondsToTime(this.timer ? this.timer.time : 0);
  }
}
