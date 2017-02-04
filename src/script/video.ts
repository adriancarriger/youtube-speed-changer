import { Subject } from 'rxjs';

export class YoutubeVideo {
  newSpeed: Subject<string> = new Subject();
  newStart: Subject<string> = new Subject();
  minutes = 0;
  playing = true;
  seconds = 0;
  video: HTMLVideoElement;
  // Bound to play/pause
  boundPlay: EventListener;
  boundPause: EventListener;
  boundSpeed: EventListener;
  // New speed
  constructor() {
    this.init();
  }
  init() {
    this.setup();
    this.addListeners();
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
  destroy() {
    this.removeListeners();
  }
  forwards() {
    this.seek(1);
  }
  setCurrent() {
    this.set(this.video.currentTime);
  }
  setup() {
    this.video = document.querySelectorAll('video')[0];
    this.emitSpeed();
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
  private addListeners() {
    // Play
    this.boundPlay = () => this.playing = true;
    this.video.addEventListener('play', this.boundPlay);
    // Pause
    this.boundPause = () => this.playing = false;
    this.video.addEventListener('pause', this.boundPause);
    // Speed change
    this.boundSpeed = () => this.emitSpeed();
    this.video.addEventListener('ratechange', this.boundSpeed);
  }
  private emitSpeed() {
    this.newSpeed.next(Math.round(this.video.playbackRate * 100) + '%');
  }
  private pause() {
    this.video.pause();
  }
  private play() {
    this.video.play();
    this.video.currentTime = 60 * this.minutes + Number(this.seconds);
  }
  private removeListeners() {
    if (this.video === undefined) { return; }
    this.video.removeEventListener('play', this.boundPlay);
    this.video.removeEventListener('pause', this.boundPause);
    this.video.removeEventListener('ratechange', this.boundSpeed);
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
  }
}
