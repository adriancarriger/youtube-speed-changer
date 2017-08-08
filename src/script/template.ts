export const DisplayTemplate = `
<div style="font-size: 14px">
  <h1 style='padding-top: 25px; padding-bottom: 10px' class='title ytd-video-primary-info-renderer'>⚡ Youtube Speed Changer Extension</h1>
  <div>Speed: <span id='ytsc-speed'>100%</span></div>
  <div>Start point: <span id='ytsc-start'>0</span></div>
  <h2 style='font-weight: 100; font-size: 16px; padding-top: 10px; padding-bottom: 10px;'>Basic Controls</h2>
  <ul style="list-style: none;">
    <li><b>v</b>: Toggles start/stop (from start point)
    <li><b>s</b>: Slow down 5%
    <li><b>d</b>: Speed up 5%
    <li><b>t</b>: Set start point to current video position
    <li><b>q</b>: Move start point backward 1 second
    <li><b>r</b>: Move start point forward 1 second</li>
  </ul>
  <h2 style='font-weight: 100; font-size: 16px; padding-top: 10px; padding-bottom: 10px;'>Precision Controls</h2>
  <ul style="list-style: none;">
    <li><b>x</b>: Slow down 1%
    <li><b>c</b>: Speed up 1%
    <li><b>w</b>: Move start point backward 0.1 seconds
    <li><b>e</b>: Move start point forward 0.1 seconds
  </ul>
</div>
`;
