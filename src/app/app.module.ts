import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { PrintTimerComponent } from './print-timer/print-timer.component';
import { TimerListComponent } from './timer-list/timer-list.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [AppComponent, PrintTimerComponent, TimerListComponent, TimerComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
