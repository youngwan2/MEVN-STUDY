const axios = require('axios');

// 크롤링된 데이터를 편하게 들고와주게 도와주는 라이브러리
const cheerio = require('cheerio');

axios.get('https://www.melon.com/chart/index.htm').then((response) => {
  const $ = cheerio.load(response.data);
  const songs = [];
  const date = $('.mt12 .year').text();

  // 멜론에서 rank 목록 가져옴
  $('.rank01').each(function () {
    songs.push($(this).text());
  });

  console.log(date);
  songs.forEach((song, i) => {
    if (i >= 20) return
    console.log(`${i + 1}위 : ${song.replace(/[\t\n]/g, '')}`);
  });
});

// replace('\t','')
