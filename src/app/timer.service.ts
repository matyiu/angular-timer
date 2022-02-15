import { Injectable } from '@angular/core';
import { timers } from './timers';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  getAll() {
    return timers;
  }
}
