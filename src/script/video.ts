import { Subject } from 'rxjs';

export class YoutubeVideo {
  newSpeed: Subject<string> = new Subject();
  newStart: Subject<string> = new Subject();
  minutes = 0;
  playing = true;
  seconds = 0;
  video: HTMLVideoElement;
  constructor() {
    this.init();
  }
  init() {
    this.setup();
  }
  backwards() {
    this.seek(-1);
  }
  bitBackwards() {
    this.seek(-0.1);
  }
  bitFaster() {
    this.speed(this.video.playbackRate * 100 + 1);
  }
  bitForwards() {
    this.seek(0.1);
  }
  bitSlower() {
    this.speed(this.video.playbackRate * 100 - 1);
  }
  forwards() {
    this.seek(1);
  }
  setCurrent() {
    this.set(this.video.currentTime);
  }
  setup() {
    this.video = document.querySelectorAll('video')[0];
  }
  speedUp() {
    this.speed(this.video.playbackRate * 100 + 5);
  }
  slowDown() {
    this.speed(this.video.playbackRate * 100 - 5);
  }
  toggle() {
    this.playing = !this.playing;
    this.playing ? this.play() : this.pause();
  }
  private pause() {
    this.video.pause();
  }
  private play() {
    this.video.play();
    this.video.currentTime = 60 * this.minutes + Number(this.seconds);
  }
  private round(value, decimals) {
    return value.toFixed(decimals);
  }
  private seek(change: number) {
    let newT = this.video.currentTime + change;
    if (newT < 0) { newT = 0; }
    this.video.currentTime = newT;
    this.set(newT);
  }
  private set(time) {
    this.minutes = Math.floor(time / 60);
    this.seconds = this.round(time - this.minutes * 60, 1);
    this.newStart.next(`${this.minutes}:${this.seconds}`);
  }
  private speed(newPercent) {
    if (newPercent < 50) { newPercent = 50; }
    if (newPercent > 400) { newPercent = 400; }
    this.video.playbackRate = newPercent / 100;
    this.newSpeed.next(Math.round(newPercent) + '%');
  }
}
