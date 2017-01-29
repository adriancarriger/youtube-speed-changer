import { YoutubeDisplay } from '../src/script/display';
import { YoutubeVideo } from '../src/script/video';
import { YoutubeController } from '../src/script/youtube-controller';

describe('Controller: YoutubeController', () => {
  let youtubeVideo: YoutubeVideo;
  let youtubeDisplay: YoutubeDisplay;
  let controller: YoutubeController;

  beforeEach(() => {
    youtubeVideo = new YoutubeVideo();
    youtubeDisplay = new YoutubeDisplay();
    controller = new YoutubeController(youtubeVideo, youtubeDisplay);
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });
});
