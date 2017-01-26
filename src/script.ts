///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 
import { YoutubeDisplay } from './script/display';
import { YoutubeVideo } from './script/video';
import { YoutubeController } from './script/youtube-controller';

(() => {
  const video = new YoutubeVideo();
  const display = new YoutubeDisplay();
  new YoutubeController(video, display);
})();

