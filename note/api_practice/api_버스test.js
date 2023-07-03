// require('dotenv').config();
// const request = require('request');
// const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

// const key = process.env.PUBLICKEY;

/* XML */
// const url = 'http://apis.data.go.kr/6260000/BusanBIMS/busStopList';
// let queryParams = '?' + encodeURIComponent('serviceKey') + `=${key}`; /* Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('2'); /* */
// queryParams += '&' + encodeURIComponent('bstopnm') + '=' + encodeURIComponent('온천장'); /* */
// queryParams += '&' + encodeURIComponent('arsno') + '=' + encodeURIComponent('06013'); /* */

// console.log(url+queryParams)
// request({
//     url: url + queryParams,
//     method: 'GET'
// }, function (error, response, body) {
//     //console.log('Status', response.statusCode);
//     //console.log('Headers', JSON.stringify(response.headers));
//     //console.log('Reponse received', body);
//     // console.log(body)
// });

/* fetch */

//  async function fetchFunc(){
//     const url = `http://apis.data.go.kr/6260000/BusanBIMS/busStopList/${key}`
//     console.log(url)
//     const response = await fetch(url)
//     const data = await response

//     console.log(data)

//     // const parser = new XMLParser();
//     // const rst = parser.parse(data);
//     // console.log(rst)

// }

// fetchFunc()

/* xmlhttprequest */

const xhr = new XMLHttpRequest();

xhr.open('get', `http://apis.data.go.kr/6260000/BusanBIMS/busStopList?servicekey=0Df2pGeb6Ehc7VdL524s6NAOfK8WqAgRUmGkUNAhgesGIsAY7fhk8uWvUClwptp1l3SJ946LgKLnf%2B8%2B4CQwNQ%3D%3D` )


xhr.addEventListener('load',()=>{
    console.log(xhr.response)
})



xhr.send('');
