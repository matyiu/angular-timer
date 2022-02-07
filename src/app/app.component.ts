import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Timer';
  timer: number = 0;
  interval: ReturnType<typeof setInterval> | undefined;

  startTimer() {
    this.interval = setInterval(() => {
      this.timer -= 1;
    }, 1000);
  }
}
