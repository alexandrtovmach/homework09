import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['clock.component.css']
})
export class ClockComponent implements OnInit {
  clockTime: string;

  ngOnInit() {
    runClock();
    setInterval (runClock, 1000);
    function runClock() {
      var time = new Date()
      this.clockTime = String(time.toTimeString()).substr(0, 8);
    }
  }

}
