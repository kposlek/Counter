import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';
@Component({
  selector: 'my-button',
  template: `
    <button (click)="clicked()">Click!</button>
  `
})
export class MyButtonComponent {
  constructor(private counterService: CounterService) {}
  clicked() {
    this.counterService.count();
  }
}
