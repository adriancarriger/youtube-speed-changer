import { YoutubeMock } from './youtube.mock';
import { YoutubeDisplay } from '../src/script/display';
import { YoutubeVideo } from '../src/script/video';
import { YoutubeController } from '../src/script/youtube-controller';

describe('Controller: YoutubeController', () => {
  let controller: YoutubeController;
  let youtubeDisplay: YoutubeDisplay;
  let youtubeMock = new YoutubeMock();
  let youtubeVideo: YoutubeVideo;

  beforeEach(done => {
    youtubeMock.setup();
    youtubeVideo = new YoutubeVideo();
    youtubeDisplay = new YoutubeDisplay();
    controller = new YoutubeController(youtubeVideo, youtubeDisplay);
    youtubeVideo.video.play();
    setTimeout(() => done(), 1000);
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should create the controller', () => {
    expect(controller).toBeTruthy();
  });

  // it('should slow down the video by 5%', () => {
  //   expect( speed(youtubeVideo) ).toEqual(100);
  //   keypress(115); // key: s
  //   expect( speed(youtubeVideo) ).toEqual(95);
  // });

  // it('should speed up the video by 5%', () => {
  //   expect( speed(youtubeVideo) ).toEqual(100);
  //   keypress(100); // key: d
  //   expect( speed(youtubeVideo) ).toEqual(105);
  // });

  // it('should slow down the video by 1%', () => {
  //   expect( speed(youtubeVideo) ).toEqual(100);
  //   keypress(120); // key: x
  //   expect( speed(youtubeVideo) ).toEqual(99);
  // });

  // it('should speed up the video by 1%', () => {
  //   expect( speed(youtubeVideo) ).toEqual(100);
  //   keypress(99); // key: c
  //   expect( speed(youtubeVideo) ).toEqual(101);
  // });

  // it('should toggle play/pause', () => {
  //   expect( youtubeVideo.playing ).toEqual(true);
  //   keypress(118); // key: v
  //   expect( youtubeVideo.playing ).toEqual(false);
  //   keypress(118); // key: v
  //   expect( youtubeVideo.playing ).toEqual(true);
  // });

  // it('should seek forward by 1 second', () => {
  //   expect( youtubeVideo.video.currentTime ).toEqual(0);
  //   keypress(114); // key: r
  //   expect( youtubeVideo.video.currentTime ).toEqual(1);
  //   keypress(114); // key: r
  //   keypress(114); // key: r
  //   expect( youtubeVideo.video.currentTime ).toEqual(3);
  // });

  // it('should seek forwards and backwards by 1 second', () => {
  //   expect( youtubeVideo.video.currentTime ).toEqual(0);
  //   keypress(114); // key: r
  //   keypress(114); // key: r
  //   expect( youtubeVideo.video.currentTime ).toEqual(2);
  //   keypress(113); // q
  //   expect( youtubeVideo.video.currentTime ).toEqual(1);
  //   keypress(113); // q
  //   expect( youtubeVideo.video.currentTime ).toEqual(0);
  //   keypress(113); // q
  //   expect( youtubeVideo.video.currentTime ).toEqual(0);
  // });

  // it('should seek by 0.1 seconds', () => {
  //   expect( mill(youtubeVideo) ).toEqual(0);
  //   keypress(101); // key: e
  //   expect( mill(youtubeVideo) ).toEqual(100);
  //   keypress(101); // key: e
  //   keypress(101); // key: e
  //   expect( mill(youtubeVideo) ).toEqual(300);
  //   keypress(119); // key: w
  //   expect( mill(youtubeVideo) ).toEqual(200);
  // });
});

function keypress(character: number) {
  const event: any = document.createEvent('Event');
  event.keyCode = character;
  event.initEvent('keypress');
  document.dispatchEvent(event);
}

function speed(youtubeVideo: YoutubeVideo): number {
  return youtubeVideo.video.playbackRate * 100;
}

function mill(youtubeVideo: YoutubeVideo): number {
  return Math.round( youtubeVideo.video.currentTime * 1000 );
}
