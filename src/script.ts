(() => {
  const v = {
    video: document.querySelectorAll('video')[0],
    minutes: 0,
    seconds: 0,
    playing: true,
    play: () => {
      v.video.play();
      v.video.currentTime = 60 * v.minutes + Number(v.seconds);
    },
    pause: () => v.video.pause(),
    toggle: () => { v.playing = !v.playing; v.playing ? v.play() : v.pause(); },
    restart: () => v.play(),
    speed: newPercent => { v.video.playbackRate = newPercent / 100; return Math.round(newPercent) + '%'; },
    speedUp: () => v.speed(v.video.playbackRate * 100 + 5),
    slowDown: () => v.speed(v.video.playbackRate * 100 - 5),
    seek: change => {
      const newT = v.video.currentTime + change;
      v.video.currentTime = newT;
      return v.set(newT);
    },
    forwards: () => v.seek(1),
    backwards: () => v.seek(-1),
    bitForwards: () => v.seek(0.1),
    bitBackwards: () => v.seek(-0.1),
    bitFaster: () => v.speed(v.video.playbackRate * 100 + 1),
    bitSlower: () => v.speed(v.video.playbackRate * 100 - 1),
    set: (t) => {
      v.minutes = Math.floor(t / 60);
      v.seconds =  v.round(t - v.minutes * 60, 1);
      console.log(v.minutes, v.seconds);
      return `${v.minutes}:${v.seconds}`;
    },
    round: (value, decimals) => value.toFixed(decimals)
  };

  const display = { percent: null, start: null };
  document.addEventListener('DOMContentLoaded', setup);
  document.addEventListener('spfdone', setup); // Youtube page change event
  if (v.video !== undefined) {
    setup();
  }

  // Setup keybindings
  document.onkeypress = e => {
    const target: any = e.target || e.srcElement;
    if ( target.tagName === 'INPUT' ) { return; }
    if (e.keyCode === 118) { v.toggle(); } // v
    if (e.keyCode === 100) { updateDisplay('percent', v.speedUp() ); } // d
    if (e.keyCode === 115) { updateDisplay('percent', v.slowDown() ); } // s
    if (e.keyCode === 114) { updateDisplay('start', v.forwards() ); } // r
    if (e.keyCode === 113) { updateDisplay('start', v.backwards() ); } // q
    if (e.keyCode === 116) { updateDisplay('start', v.set(v.video.currentTime) ); } // t
    if (e.keyCode === 101) { updateDisplay('start', v.bitForwards() ); } // e
    if (e.keyCode === 119) { updateDisplay('start', v.bitBackwards() ); } // w
    if (e.keyCode === 120) { updateDisplay('percent', v.bitSlower() ); } // x
    if (e.keyCode === 99) { updateDisplay('percent', v.bitFaster() ); } // c
  };

  // Update display
  function updateDisplay(item, text) {
    display[item].innerHTML = text;
  }

  // Setup current video
  function setup() {
    v.video = document.querySelectorAll('video')[0];
    const referenceNode = document.getElementById('watch-header');
    const newNode = document.createElement('div');
    newNode.setAttribute('class', 'yt-uix-expander yt-card yt-card-has-padding yt-uix-expander-collapsed');
    newNode.innerHTML = `
      <h1 style='padding-top: 5px;'>Youtube Speed Changer Extension</h1>
      <div>Speed: <span id='ytsc-percent'>100%</span></div>
      <div>Start point: <span id='ytsc-start'>0</span></div>
      <div class="yt-uix-expander-body">
        <h2 style='padding-top: 10px;'>Basic Controls</h2>
        <ul>
          <li><b>v</b>: Toggles start/stop (from start point)
          <li><b>s</b>: Slow down 5%
          <li><b>d</b>: Speed up 5%
          <li><b>t</b>: Set start point to current video position
          <li><b>q</b>: Move start point backward 1 second
          <li><b>r</b>: Move start point forward 1 second</li>
        </ul>
        <h2 style='padding-top: 10px;'>Precision Controls</h2>
        <ul>
          <li><b>x</b>: Slow down 1%
          <li><b>c</b>: Speed up 1%
          <li><b>w</b>: Move start point backward 0.1 seconds
          <li><b>e</b>: Move start point forward 0.1 seconds
        </ul>
      </div>
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander
        yt-uix-expander-head yt-uix-expander-collapsed-body yt-uix-gen204"
        type="button" onclick=";return false;"
        data-gen204="feature=watch-show-more-metadata">
        <span class="yt-uix-button-content">Show more</span>
      </button>
      <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander
        yt-uix-expander-head yt-uix-expander-body" type="button"
        onclick=";return false;">
        <span class="yt-uix-button-content">Show less</span>
      </button>`;
    const videoPlayer = <HTMLElement>referenceNode
      .parentNode
      .insertBefore(newNode, referenceNode);
    display.percent = document.getElementById('ytsc-percent');
    display.start = document.getElementById('ytsc-start');
  }
})();
