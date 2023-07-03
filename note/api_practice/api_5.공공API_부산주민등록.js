const request = require('request');
require('dotenv').config();

const url = `https://api.odcloud.kr/api/3076607/v1/uddi:c92f6791-d635-4aa9-8426-bd70650b4982?page=1&perPage=10&serviceKey=${process.env.PUBLICKEY}`;

request(url, (error, res, body) => {
  const transform = JSON.parse(body);
  const getData = transform.data;

  // console.log(getData)
  getData.forEach((data, i) => {
    console.log(
      `================구군:${data.구군}===================\n남자인구수(명):${data['남자인구수(명)']}\n여자인구수(명):${data['여자인구수(명)']}\n세대수:${data['세대수(세대)']}\n인구수(명):${data['인구수(명)']}`
    );
  });
});

/* 
                                                                                '구군': '중구',
                                                                                    '남자인구수(명)': 20725,
                                                                                    '동수(개소)': 9,
                                                                                    '면적(제곱킬로미터)': '2.83',
                                                                                    '세대수(세대)': 23960,
                                                                                    '시전체 인구에 대한 구성비(퍼센트)': '1.244607611',
                                                                                    '여자인구수(명)': 21184,
                                                                                    '인구밀도(제곱킬로미터 당 명수)': 14809,
                                                                                    '인구수(명)': 41909

                                                                                */
