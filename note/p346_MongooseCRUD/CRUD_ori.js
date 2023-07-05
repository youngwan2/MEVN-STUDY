/* -----------여기는 데이터베이스를 연결하는 곳 */

require("dotenv").config();

// mongoose 패키지(라이브러리) 가져옴
const mongoose = require("mongoose");

// 환경변수 설정(몽고디비 연결에 필요한거임)
const USER = process.env.DBID;
const PWD = process.env.DBPWD;
const HOST = process.env.DBHOST;
const DB_NAME = "d1";
console.log(USER, PWD, HOST);

// mongodb://d1:5678@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=d1
const mongodbURL = `mongodb://${USER}:${PWD}@127.0.0.1/${DB_NAME}`;
mongoose.set("strictQuery", false); // 권장사항 추가
mongoose
  .connect(mongodbURL, { useNewUrlParser: true }) // 몽고디비와 연결
  .then(() => {
    console.log("Connection successful!!!(정상적인 연결)");
  })
  .catch((err) => {
    console.error(err);
  });

const Schema_ori = require("./schema.js");
module.exports = Schema_ori;
