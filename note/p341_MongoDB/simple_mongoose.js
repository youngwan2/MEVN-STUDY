const mongoose = require('mongoose');
const Photos = require('./photo.js');
const fs = require('fs');
const path = require('path');

// mongoDB의 로컬 주소
const mongoDB = 'mongodb://127.0.0.1/my_database1';

mongoose.set('strictQuery', false); // 필수 추가
//  mongoDB주소를 mongoose와 연결(connect) 한다.
mongoose
  .connect(mongoDB) // 6.0 부터는 자동관리 한다고 함
  .then(() => {
    console.log('Connection successful !!!');
  })
  .catch((err) => {
    console.error(err);
  });

const _path = path.join(__dirname, './photos.json');
console.log(_path); // 콘솔) d:\kyw\MEVN\note\p341_MongoDB\photos.json

const main = async () => {
  const t = JSON.parse(fs.readFileSync(_path, 'utf-8').toString());
  console.time('5000건의 데이터 삽입');
  Photos.insertMany(t).then(() => {
    console.timeEnd('5000건의 데이터 삽입');
  });
};

main();
