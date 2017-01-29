const fs = require('fs');
const path = require('path');
const version = require('../package.json').version;
const mPath = path.join(__dirname, '../src/manifest.json');
const manifest = require(mPath);

if (version !== manifest.version) {
  manifest.version = version;
  fs.writeFile(mPath, JSON.stringify(manifest, null, 2), err => {
    if (err) return console.log(err);
  });
}
