import { Component } from '@angular/core';
import { CounterService } from '../services/counter/counter.service';

@Component({
  selector: 'counter',
  template: `
    <p>{{ getCountedfromService() }}</p>
  `
})
export class CounterComponent {
  constructor(private counterService: CounterService) {}
  getCountedfromService() {
    return this.counterService.getCounted();
  }
}
