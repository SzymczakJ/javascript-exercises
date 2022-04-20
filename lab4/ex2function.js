/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable global-require */
/* eslint-disable no-var */

function foo(path) {
  var fs = require('fs');
  console.log(path);
  var stats = fs.statSync('' + path);

  if (stats.isFile() === true) {
    console.log('its a file');
    const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
    console.log(data);
    return data;
  }
  console.log('its a directory');
  return 1;
}
module.exports = foo;
