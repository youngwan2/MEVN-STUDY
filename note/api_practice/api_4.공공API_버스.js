const request = require('request');
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

require('dotenv').config();

const key = process.env.PUBLICKEY;
// console.log(key);

const url = `http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=${key}`;
const bstop = encodeURI('서면역');
const opt = '&pageNo=1&numOfRows=100&bstopnm=' + bstop;

const uri = url.concat(opt);

const urlTotal = url + key + opt;
// console.log('en:', bstop);
// console.log('de:', decodeURI(bstop));
// console.log(urlTotal);

request(url, (err, res, body) => {
  console.log(body);

  const parser = new XMLParser();
  const rst = parser.parse(body);
  console.log(rst);
});

// const xhr = new XMLHttpRequest();
// xhr.open('GET', url);

// /* readyState 상태가 변경되는 경우 실행되는 이벤트 */
// xhr.addEventListener('readystatechange', (e) => {
//   // console.log(e.currentTarget.readyState)
//   const target = e.currentTarget.readyState;
//   console.log(target);

//   if (target === 4 || target === 2) {
//     /* 정상적으로 처리된다면 response 받기 */
//     const xmlData = xhr.response
//     console.log(xmlData)
//   } else {
//     /* 실패했다면 에러 정보 받기 */
//     console.error(xhr.status, xhr.statusText);
//   }
// });

// /* 서버에 데이터 요청하기 */
// xhr.send('');

// // 정류소ID를 검색조건으로 실시간 버스 도착정보를 제공
// /* http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid */
