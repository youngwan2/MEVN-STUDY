const mongoose = require('mongoose');
const Photo = require('./photo.js');
// const Photo = require('./photo_index.js')

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';
const main = async () => {
  await mongoose
    .connect(mongoDB)
    .then(() => console.log('연결 성공!'))
    .catch((err) => {
      console.error(err);
    });

  console.time('id를 오름차순으로 찾기');
  const ret = await Photo.find().sort({ id: 1 }).limit(100);
  console.log(ret)
  console.timeEnd('id를 오름차순으로 찾기');
};

main()

/* 


*/
