const mongoose = require('mongoose');
const USER = process.env.DBID;
const PWD = process.env.DBPWD;
const HOST = process.env.DBHOST;
const DB_NAME = 'd1';

const mongodbURL = `mongodb://${USER}:${PWD}@127.0.0.1/d1`;

mongoose.set('strictQuery', false); // 권장사항 추가

/* 데이터베이스 서버와 몽구스를 연결함 */
mongoose
  .connect(mongodbURL, { useNewUrlParser: true }) // 몽고디비와 연결
  .then(() => {
    console.log('Connection successful!!!(정상적인 연결)');
  })
  .catch((err) => {
    console.error(err);
  });

/* 모델을 불러옴 */
const SensorSchema = require('./sensor.js');

const main = async () => {
  const test1 = await SensorSchema.aggregate(
    //
    [
      // 조건 설정(temp가 26이상인 것과 매치되면)
      { $match: { temp: { $gte: 26 } } },
      // 그룹화할 유니크한 _id를 고른 후 그룹한 뒤 모든 temp의 합계를 구함
      { $group: { _id: '$id', total: { $sum: 'temp' } } },
    ]
  );
  console.log(test1); //[{_id : 402, total : 31374.8}]

  const test2 = await SensorSchema.aggregate([
    // 조건 설정
    {
      $match: {
        $or: [{ temp: { $gte: 26, $lte: 27 } }, { humi: { $gte: 80 } }],
      },
    },
    { $group: { _id: '$id', count: { $sum: 1 } } },
    { $project: { _id: 0, count: 1 } }, // return 되는 결괏값의 영역을 설정
  ]); //[{count : 565}]
  console.log(test2);

  const test3 = await SensorSchema.aggregate([
    // 조건 설정
    { $match: { $and: [{ temp: { $eq: 26.2 } }, { humi: { $eq: 85.7 } }] } },
    {$sort :{temp :1}},
    {$limit :5},
    {$project :{_id :0, temp : 1, time : 1, min :{$minute : "$time"}}},
    {$match :{min :{$eq : 1}}}
  ]);
  console.log(test3)
};

main();