var wordCloud = require('../src/word_cloud');
var quotes = require('../data/quotes.json');
var fs = require('fs');

fs.writeFile('./data/sorted_quotes.json', JSON.stringify(wordCloud.parsr(quotes)), function(err){
  if (err) throw err;
})

// console.log(wordCloud.parsr(quotes));
