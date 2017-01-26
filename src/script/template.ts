export const DisplayTemplate = `
<h1 style='padding-top: 5px;'>Youtube Speed Changer Extension</h1>
<div>Speed: <span id='ytsc-speed'>100%</span></div>
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
