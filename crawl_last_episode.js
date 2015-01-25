var casper = require("casper").create({});

var toon_id = casper.cli.options["id"];

var uri = 'http://m.comic.naver.com/webtoon/list.nhn?titleId=' + toon_id

casper.start(uri, function() {
  var result = casper.evaluate(function(){
    var get_text = function(selector){
      return document.querySelector(selector).innerText;
	};

    var r = /\/webtoon\/detail.nhn\?titleId=\d+&no=(\d+)/
    var link = document.querySelector('#pageList > li:nth-child(1) > div > a').href

    return {
      no : r.exec(link)[1],
      date : get_text('#pageList > li:nth-child(1) > div > a > div > p > span:nth-child(4)')
    }
  });

  console.log( JSON.stringify(result) );
});

casper.run();	
