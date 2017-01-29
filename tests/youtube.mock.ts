export class YoutubeMock {
  projectRoot = 'https://raw.githubusercontent.com/adriancarriger/youtube-speed-changer/master';
  testContainer: HTMLElement;
  constructor() {
    this.init();
  }
  init() {
    this.testContainer = document.getElementById('test-container');
    if (this.testContainer === null) {
      this.testContainer = document.createElement('div');
      this.testContainer.setAttribute('id', 'test-container');
      document.body.insertBefore(this.testContainer, document.body.childNodes[0]);
    }
  }
  setup() {
    this.testContainer.innerHTML = `
    <video controls="" autoplay="" name="media">
      <source src="${this.projectRoot}/assets/big_buck_bunny.mp4" type="video/mp4">
    </video>
    <div id="watch-header"></div>`;
  }
}
