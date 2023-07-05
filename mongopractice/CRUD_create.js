const express = require("express");
const path = require("path");
const morgan = require("morgan");

const User = require("./schema");
const connect = require("./CRUD_ori");

connect();

const post = async () => {
  const user = await User.create({
    name: "kimyoungwan",
    age: 30,
  })
    .then(() => {
      console.log("저장완료!");
    })
    .catch((error) => {
      console.error("보내기실패:", error);
    });
};

post();
