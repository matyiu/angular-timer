import { Component } from '@angular/core';

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Timer';
  formatedTimer: string = '';
  timer: number = 0;
  current: number = 0;
  interval: ReturnType<typeof setInterval> | null = null;

  startTimer() {
    this.setCurrent();
    this.setFormatedTimer(this.current);
    this.interval = setInterval(() => {
      this.current -= 1;
      this.setFormatedTimer(this.current);
      if (this.current <= 0) {
        this.setFormatedTimer(0);
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

  private setCurrent() {
    const { hours, minutes, seconds } = this.parseTimer(String(this.timer));

    this.current = hours * 3600 + minutes * 60 + seconds;
  }

  private setFormatedTimer(time: number) {
    const hours = Math.trunc(time / 3600);
    const minutes = Math.trunc(time / 60 - hours * 60);
    const seconds = Math.trunc(time - hours * 3600 - minutes * 60);

    this.formatedTimer = `
      ${this.addPadZero(hours)}:
      ${this.addPadZero(minutes)}:
      ${this.addPadZero(seconds)}`;
  }

  private addPadZero(time: number): string {
    return String(time).padStart(2, '0');
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
}
