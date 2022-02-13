import { Component, OnInit } from '@angular/core';
import Timer from 'src/interfaces/Timer';

const defaultTimers = [
  {
    id: '1',
    time: 150,
    name: 'Rest',
  },
  {
    id: '2',
    time: 30 * 60,
    name: 'Pomodoro',
  },
];

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.css'],
})
export class TimerListComponent implements OnInit {
  timers: Timer[] = defaultTimers;

  constructor() {}

  ngOnInit(): void {}
}
