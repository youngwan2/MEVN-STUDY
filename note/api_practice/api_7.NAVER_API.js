require('dotenv').config();

const express = require('express');
const request = require('request');
const app = express();
const client_id = process.env.NID;
const client_secret = process.env.NPW;

console.log(client_id, client_secret);

let trans=''

let sou = 'ko',
  tar = 'en';
app.get('/trans', function (req, res) {
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  const query = req.query.text
  console.log('query:',query)
  const text = [];
  const options = {
    url: api_url,
    form: { source: sou, target: tar, text: query },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret,
    },
  };

  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });

      // 변환된 데이터 반환
      const transText = JSON.parse(body).message.result.translatedText;
      console.log("번역결과:",transText)
      trans = transText
      console.log(trans)
      // res.send(`<h1>${text}</h1>`);
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

app.get('/',(req,res)=>{

  res.sendFile(__dirname +'/api_7.NAVER_API.html')
})

app.listen(3000, function () {
  console.log('http://127.0.0.1:3000/trans app listening on port 3000!');
});
