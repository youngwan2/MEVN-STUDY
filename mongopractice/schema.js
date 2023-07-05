const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// 스키마와 몽고디비 컬렉션을 연결하는 모델을 생성한다.

module.exports = mongoose.model("User", userSchema, "User");
