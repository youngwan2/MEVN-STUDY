let Schema_ori = require('./CRUD_ori.js');

const main = async () => {
  const CRUD_C = new Schema_ori(_data);
  const t = await CRUD_C.find(
    {
      title: { $eq: '홍길동' },
    },
    { _id: 0 }
  ).lean();
  console.log(t);
};

main();
