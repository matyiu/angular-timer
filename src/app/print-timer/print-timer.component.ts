import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-print-timer',
  templateUrl: './print-timer.component.html',
  styleUrls: ['./print-timer.component.css'],
})
export class PrintTimerComponent implements OnInit {
  @Input() public hours: number = 0;
  @Input() public minutes: number = 0;
  @Input() public seconds: number = 0;

  constructor() {}

  public formatTime(time: number): string {
    return String(time).padStart(2, '0');
  }

  ngOnInit(): void {}
}
