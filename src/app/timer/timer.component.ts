import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})
export class TimerComponent implements OnInit {
  timerNum: number = 0;
  inputTimer: number = 0;
  idTimer: number;
  runned: boolean;
  bind(func, context) {
    return function () {
      return func.call(context)
    }
  }
  beautifierTime(millisecnods: number): string {
    var formatter = new Intl.DateTimeFormat("ru", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    return formatter.format(millisecnods - 3000*60*60) + ':' + String(millisecnods).slice(-3);
  }
  startTimer(): void {
    this.runned = true;
    this.idTimer = setInterval(this.bind(function () {
      this.timerNum -= 50;
      if (this.timerNum <= 0) {this.timerNum = 0; clearInterval(this.idTimer); this.runned = false; return}
    }, this), 50)
  }
  pauseTimer(): void {
    this.runned = false;
    clearInterval(this.idTimer);
  }
  clearTimer(): void {
    this.runned = false;
    clearInterval(this.idTimer);
    this.timerNum = this.inputTimer*1000*60;
  }
  re(): void {
    this.timerNum = this.inputTimer*1000*60;
  }
  ngOnInit() {
  }

}
