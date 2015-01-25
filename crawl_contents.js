var casper = require("casper").create({});

var dst = casper.cli.options["dst"];
var toon_id = casper.cli.options["id"];
var no = casper.cli.options["no"];

var uri = 'http://comic.naver.com/webtoon/detail.nhn?titleId=' + toon_id + '&no=' + no;

casper.start(uri, function() {
  var i;
  for(i=0;;i++){
    var id = '#content_image_' + i;

    if( casper.exists(id) == false ) break;
    this.captureSelector(dst + i + '.png', id);
  }

  var result = {
	 counts : i };
  console.log( JSON.stringify(result) );
});

casper.run();	
