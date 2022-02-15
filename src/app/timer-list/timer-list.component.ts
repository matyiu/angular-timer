import { Component, OnInit } from '@angular/core';
import Timer from 'src/interfaces/Timer';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.css'],
})
export class TimerListComponent implements OnInit {
  timers: Timer[] = [];

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timers = this.getTimers();
  }

  getTimers() {
    return this.timerService.getAll();
  }

  deleteTimer(id: string) {
    this.timers = this.timers.filter((timer) => timer.id !== id);
  }
}
