/* -----------여기는 데이터베이스를 연결하는 곳 */

require("dotenv").config();

// mongoose 패키지(라이브러리) 가져옴
const mongoose = require("mongoose");

// 환경변수 설정(몽고디비 연결에 필요한거임)
const USER = process.env.DBID;
const PWD = process.env.DBPWD;
const HOST = process.env.DBHOST;
const DB_NAME = "user";
console.log(USER, PWD, HOST, DB_NAME);

/* 몽구스와 몽고디비를 연결하는 함수 */
mongoose.set("strictQuery", false); // 필수 추가
const CONNECT = async () => {
  await mongoose
    .connect(`mongodb://kywdb:1234@127.0.0.1/user`)
    .then(() => {
      console.log("연결 성공!");
    })
    .catch((err) => {
      console.error(err);
    });

  // 연결 중 에러가 발생하면 띄워준다.
  mongoose.connection.on("error", (error) => {
    console.error("몽고디비 연결 에러:", error);
  });

  // 연결이 중지되면 에러를 띄워주며 재연결 시도한다.
  mongoose.connection.on("disconnected", () => {
    console.error("몽고 디비와 연결이 끊어짐.  연결 재시도");
    CONNECT();
  });
};

module.exports = CONNECT;
