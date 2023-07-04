const axios = require('axios');

// 크롤링된 데이터를 편하게 들고와주게 도와주는 라이브러리
const cheerio = require('cheerio');

axios
  .get(
    'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EB%A1%9C%EB%98%90'
  )
  .then((response) => {
    const $ = cheerio.load(response.data);
    const date = $('.date').text(); // .date 클래스에 해당하는 태그 내부의 text 가져온다.
    const number = $('.lottonum').text();

    console.log(date + '\n' + number);
  });
