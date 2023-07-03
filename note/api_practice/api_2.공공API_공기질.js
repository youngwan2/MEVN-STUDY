const request = require('request');
require('dotenv').config()

const key = process.env.PUBLICKEY

console.log(key)

const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${key}&sidoName=%EB%B6%80%EC%82%B0&returnType=JSON`;
request(url, (e, res, body) => {
  const rst = JSON.parse(body);
  const junpo = rst.response.body.items;


  junpo.forEach((v, i) => {
    console.log(
      `지역:`,
      v.stationName,
      `오존:`,
      v.o3Value,
      '일산화탄소:',
      v.coValue,
      '미세먼지:',
      v.pm10Value
    );
  });
});


// async function Fetch(){
//     const $fetch=  fetch(url)
//     // console.log($fetch)

//     const response = await $fetch
//     const data = await response.json()
//     console.log(data[4])

// }

/* 
PM10 미세먼지
PM2.5 초미세먼지

*/
