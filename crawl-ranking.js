var casper = require("casper").create({});

var uri = 'http://comic.naver.com/webtoon/weekday.nhn';

casper.start(uri, function() {
  var query_ranking = function(id){
    var ranks = document.querySelector(id).children;
    var result = new Array();

    for(var i=0;i<10;i++)
        result.push( ranks[i].children[0].title );

    return result;
  }
  var fav = casper.evaluate(query_ranking, '#realTimeRankFavorite');
  var upd = casper.evaluate(query_ranking, '#realTimeRankUpdate');

  var data = {
    rank_favorite : fav,
    rank_update : upd
  };
  console.log(JSON.stringify(data));
});

casper.run();
