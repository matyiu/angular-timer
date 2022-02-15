import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerListComponent } from '../timer-list/timer-list.component';
import { TimerComponent } from '../timer/timer.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TimerListComponent,
  },
  {
    path: ':timer',
    component: TimerComponent,
  },
  {
    path: '',
    component: TimerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
