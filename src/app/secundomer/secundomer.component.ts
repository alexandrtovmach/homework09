import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secundomer',
  templateUrl: 'secundomer.component.html',
  styleUrls: ['secundomer.component.css']
})



export class SecundomerComponent implements OnInit {
  laps = [];
  runned: boolean;
  lapRunned: boolean;
  intervalID: number;
  intervalLapID: number;
  secndomerNum: number = 0;
  secndomerLapNum: number = 0;
  secndomerPreviousLapNum: number = 0;
  lapCacheTime: number;
  lapPauseTime: number;
  cacheTime: number;
  pauseTime: number;
  resStyle: string;
  bind(func, context, arg, arg2) {
    return function () {
      return func.call(context, arg, arg2)
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
  startSec(start, a) {
    this[a] = (Date.now() - start)
  }
  run(id: string): void {
    this.runned = true;
    if (this.secndomerLapNum) {this.lap(false)}
    let start = this.cacheTime = (this.cacheTime)? (Date.now() - (this.pauseTime - this.cacheTime)): Date.now();
    this.intervalID = setInterval (this.bind(this.startSec, this, start, 'secndomerNum'), 52)
  }
  pause(): void {
    this.pauseTime = Date.now()
    this.lapPauseTime = (this.lapCacheTime)? Date.now(): undefined;
    this.runned = false;
    clearInterval(this.intervalID);
    clearInterval(this.intervalLapID);
  }
  clear(): void {
    this.pause();
    this.secndomerNum = 0;
    this.pauseTime = 0;
    this.cacheTime = 0;
    this.lapCacheTime = 0;
    this.lapPauseTime = 0;
    this.secndomerLapNum = 0;
    this.secndomerPreviousLapNum = 0;
    this.laps = [];
  }
  lap(continueLap): void {
    if (continueLap) {
      clearInterval(this.intervalLapID);
      this.lapCacheTime = 0;
      this.lapPauseTime = 0;
      this.laps.push({
        total: this.beautifierTime(this.secndomerNum), 
        lap: this.beautifierTime(this.secndomerLapNum), 
        res: (this.secndomerLapNum - this.secndomerPreviousLapNum),
        color: (this.secndomerLapNum - this.secndomerPreviousLapNum <= 0)? 'green': 'red'
      });
      this.secndomerPreviousLapNum = this.secndomerLapNum;
    };
    this.lapRunned = true;
    let startLap = this.lapCacheTime = (this.lapCacheTime)? (Date.now() - (this.lapPauseTime - this.lapCacheTime)): Date.now();
    this.intervalLapID = setInterval (this.bind(this.startSec, this, startLap, 'secndomerLapNum'), 52)
  }


  ngOnInit() {
  }

}
