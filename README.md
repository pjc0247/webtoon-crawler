# webtoon-crawler
네이버 웹툰 크롤러

기능들
----
* 만화 콘텐츠(이미지) 크롤링
```shell
casperjs crawl_contents.js --id=웹툰아이디 --no=회수번호 --dst=대상경로
```
__stdout__에 출력되는 정보
```json
{ "counts" : 이미지_조각_수 }
```


ToDo
----
* 웹툰 목록 크롤링
