import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.time = secondsToTime(this.timer ? this.timer.time : 0);
  }

  startTimer() {
    this.router.navigate(['', this.timer?.time]);
  }
}
