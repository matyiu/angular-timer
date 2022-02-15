import { Component, OnInit } from '@angular/core';
import Time from 'src/interfaces/Time';
import { secondsToTime } from 'src/utils/date';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  title = 'Angular Timer';
  time: Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  timer: number = 0;
  current: number = 0;
  interval: ReturnType<typeof setInterval> | null = null;
  focus: boolean = false;

  constructor() {}

  startTimer() {
    this.setCurrent();
    this.setTime(this.current);
    this.interval = setInterval(() => {
      this.current -= 1;
      this.setTime(this.current);
      if (this.current <= 0) {
        this.setTime(0);
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  resetTimer() {
    this.stopTimer();
  }

  timerChange(value: number) {
    this.timer = value || 0;
    this.time = this.parseTimer(String(value || 0));
  }

  toggleFocus() {
    this.focus = !this.focus;
  }

  focusInput(input: HTMLInputElement) {
    input.focus();
  }

  private setCurrent() {
    const { hours, minutes, seconds } = this.parseTimer(String(this.timer));

    this.current = hours * 3600 + minutes * 60 + seconds;
  }

  private setTime(time: number): void {
    this.time = secondsToTime(time);
  }

  parseTimer(time: string): Time {
    const hours = Number(time.slice(0, -4));
    const minutes = Number(time.slice(-4, -2));
    const seconds = Number(time.slice(-2));

    return {
      hours,
      minutes,
      seconds,
    };
  }

  ngOnInit(): void {}
}
