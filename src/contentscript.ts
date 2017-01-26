/// <reference path="../node_modules/@types/chrome/index.d.ts"/>

// Inject into page - http://stackoverflow.com/a/9310273/5357459s
(() => {
  const s = document.createElement('script');
  s.src = chrome.extension.getURL('script.js');
  (document.head || document.documentElement).appendChild(s);
  s.onload = () => s.parentNode.removeChild(s);
})();
