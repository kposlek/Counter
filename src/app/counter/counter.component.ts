import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <p>{{ count }}</p>
  `
})
export class CounterComponent {
  count: number = 0;
}
