const fs = require('fs');
const path = require('path');
const version = require('../package.json').version;
const mPath = path.join(__dirname, '../dist/manifest.json');
const manifest = require(mPath);

if (version !== manifest.version) {
  manifest.version = version;
  fs.writeFile(mPath, JSON.stringify(manifest), err => {
    if (err) return console.log(err);
  });
}
