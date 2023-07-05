let Schema_ori = require('./CRUD_ori.js');

const main = async () => {
  const CRUD_C = new Schema_ori(_data);
  const t = await CRUD_C.save();
  console.log(t);
};

main();
