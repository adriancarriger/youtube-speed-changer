import { YoutubeDisplay } from './display';
import { YoutubeVideo } from './video';
import { YoutubeController } from './youtube-controller';

export class YoutubeSpeed {
  constructor() {
    const video = new YoutubeVideo();
    const display = new YoutubeDisplay();
    new YoutubeController(video, display);
  }
}
