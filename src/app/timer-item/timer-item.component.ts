import { Component, Input, OnInit } from '@angular/core';
import Timer from 'src/interfaces/Timer';

@Component({
  selector: 'app-timer-item',
  templateUrl: './timer-item.component.html',
  styleUrls: ['./timer-item.component.css'],
})
export class TimerItemComponent implements OnInit {
  @Input() timer: Timer | null = null;

  constructor() {}

  ngOnInit(): void {}
}
