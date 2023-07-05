const User = require("./schema");
const connect = require("./CRUD_ori");

connect();

const get = async () => {
  const users = await User.find({name:{$eq:'kimyoungwan'}},{_id:0,__v:0})
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
};

get();
