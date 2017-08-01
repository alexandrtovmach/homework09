import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['clock.component.css']
})
export class ClockComponent implements OnInit {
  clockTime: string;

  ngOnInit() {
    setInterval ( () => {
      var time = new Date()
      this.clockTime = String(time.toTimeString()).substr(0, 8);
    }, 1000);
     
  }

}
