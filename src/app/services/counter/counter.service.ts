import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private counter: number = 0;
  count() {
    this.counter = this.counter + 1;
  }
  getCounted() {
    return this.counter;
  }
}
