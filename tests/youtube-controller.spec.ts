import { YoutubeMock } from './youtube.mock';
import { YoutubeDisplay } from '../src/script/display';
import { YoutubeVideo } from '../src/script/video';
import { YoutubeController } from '../src/script/youtube-controller';

describe('Controller: YoutubeController', () => {
  let controller: YoutubeController;
  let youtubeDisplay: YoutubeDisplay;
  let youtubeMock = new YoutubeMock();
  let youtubeVideo: YoutubeVideo;

  beforeEach(() => {
    youtubeMock.setup();
    youtubeVideo = new YoutubeVideo();
    youtubeDisplay = new YoutubeDisplay();
    controller = new YoutubeController(youtubeVideo, youtubeDisplay);
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });
});
