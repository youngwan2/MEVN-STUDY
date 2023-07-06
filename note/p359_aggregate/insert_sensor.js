const csvFilePath = './sensor.csv';
const csv = require('csvtojson');
const path = require('path');
const _path = path.join(__dirname, csvFilePath);

/* 모델을 불러온다. */
const SensorModel = require('./sensor.js');

const main = async () => {
  // csv 파일을 json 형태로 변환하여 sensorList 변수에 담는다.
  const sensorList = await csv().fromFile(_path);
  /*  ... {
    id: '402',
    time: '2019-08-02 01:02',
    temp: '25.8',
    wv: '1.3',
    humi: '88.9'
  },... */

  SensorModel.insertMany(sensorList, (err,docs)=>{
    console.log('데이터 삽입완료')
  })
};

main();



