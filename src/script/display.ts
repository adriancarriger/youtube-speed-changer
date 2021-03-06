import { DisplayTemplate } from './template';

export class YoutubeDisplay {
  speed: HTMLElement;
  start: HTMLElement;
  constructor() {
  }
  update(item: string, text: string) {
    this[item].innerHTML = text;
  }
  setup() {
    const referenceNode = document.getElementById('meta') || document.getElementById('watch-header');
    if (referenceNode === undefined) { return; }
    const newNode = document.createElement('div');
    newNode.setAttribute('class', 'yt-uix-expander yt-card yt-card-has-padding yt-uix-expander-collapsed');
    newNode.innerHTML = DisplayTemplate;
    const videoPlayer = <HTMLElement>referenceNode
      .parentNode
      .insertBefore(newNode, referenceNode);
    this.speed = document.getElementById('ytsc-speed');
    this.start = document.getElementById('ytsc-start');
  }
}
