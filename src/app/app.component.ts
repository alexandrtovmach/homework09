import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  mode: string = 'timer';
  chooseMode(mode: string): void {
    this.mode = mode
  }
}
