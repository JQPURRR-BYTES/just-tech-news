var fs = require('fs');
var contentsOfReadme = fs.readFileSync(`${__dirname}/../.env`, 'utf8');
console.log('contentsOfReadme:', contentsOfReadme);
process.exit(0);
