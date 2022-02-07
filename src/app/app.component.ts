import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Timer';
  timer: number = 0;
  initialTimer: number = 0;
  interval: ReturnType<typeof setInterval> | null = null;

  startTimer() {
    this.initialTimer = this.timer;
    this.interval = setInterval(() => {
      this.timer -= 1;
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
    this.timer = this.initialTimer;
  }
}
