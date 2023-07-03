const request = require('request');
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

require('dotenv').config();

const key = process.env.PUBLICKEY;
// console.log(key);

const url = `http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=0Df2pGeb6Ehc7VdL524s6NAOfK8WqAgRUmGkUNAhgesGIsAY7fhk8uWvUClwptp1l3SJ946LgKLnf%2B8%2B4CQwNQ%3D%3D&`;
// const bstop = encodeURI('서면역');
let queryParams = '';
queryParams +=
  '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams +=
  '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams +=
  '&' +
  encodeURIComponent('bstopnm') +
  '=' +
  encodeURIComponent('부산시청'); /* */
queryParams +=
  '&' + encodeURIComponent('arsno') + '=' + encodeURIComponent('13708'); /* */

const urlTotal = url + queryParams;
console.log(urlTotal);
// console.log('en:', bstop);
// console.log('de:', decodeURI(bstop));
// console.log(urlTotal);

request({ url: urlTotal, method: 'GET' }, (err, res, body) => {
  console.log('응답 코드:', res.statusCode);
  console.log('에러:', err);
  console.log('Headers:', JSON.stringify(res.headers));
  const parser = new XMLParser();
  const rst = parser.parse(body);
  console.log(rst.response.body.items.item);
});
