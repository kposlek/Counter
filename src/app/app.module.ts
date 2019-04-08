import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './services/counter/counter.service';

@NgModule({
  declarations: [AppComponent, MyButtonComponent, CounterComponent],
  imports: [BrowserModule],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
