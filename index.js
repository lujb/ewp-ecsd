var fs = require('fs');
var path = require('path');

// init
var opaque = {};
var dir = path.join(__dirname, 'ecsd');
var files = fs.readdirSync(dir);

files.forEach(function(file) {
  var file2 = path.join(dir, file);
  opaque[file] = fs.readFileSync(file2, 'utf8');
});

module.exports = opaque;