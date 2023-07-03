const request = require('request')
require('dotenv').config()


/*  전국 해수욕장 조회 서비스 */


const url =`http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?beach_num=2&base_date=20230702&base_time=1100&serviceKey=${process.env.PUBLICKEY}&dataType=json&pageNo=2`


request(url,(error,res,body)=>{
  const data = JSON.parse(body)


  const getData = data.response.body.items.item


  getData.forEach((data,i)=>{

    console.log('해변ID:',data.beachNum, '발표날짜:',data.baseDate,'발표시간:',data.baseTime,'카테고리:',data.category,'예보일자:',data.fcstDate,'예보시간:',data.fcstTime,'예보 값:',data.fcstValue,'X좌표:',data.nx,'Y좌표:',data.ny)
  })
})
