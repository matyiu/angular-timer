import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTimerComponent } from './print-timer.component';

describe('PrintTimerComponent', () => {
  let component: PrintTimerComponent;
  let fixture: ComponentFixture<PrintTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
