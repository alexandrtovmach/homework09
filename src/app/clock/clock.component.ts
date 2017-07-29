import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['clock.component.css']
})
export class ClockComponent implements OnInit {

  ngOnInit() {
    var clock = document.getElementById('clock');
    runClock();
    setInterval (runClock, 1000);
    function runClock() {
      var time = new Date()
      clock.innerHTML = String(time.toTimeString()).substr(0, 8);
    }
  }

}
