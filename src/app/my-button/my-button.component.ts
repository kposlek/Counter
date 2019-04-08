import { Component } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
    <button (click)="clicked()">Click!</button>
  `
})
export class MyButtonComponent {
  clicked() {
    console.log('It Works!');
  }
}
