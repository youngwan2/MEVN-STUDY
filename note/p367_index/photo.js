const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 스키마 정의(테이블을 어떤 구조로 생성할 것인지 컬럼의 타입을 지정한 것이라 보면 됨) */
const PhotoSchema = new Schema({
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String,
});

// 앞서 정의한 스키마를 바탕으로 모델을 생성하는데 PhotoSchema 모델 이름을 Photo 로 설정한거임
// 모델이름을 Photo 로 명확히 하고자 한다면 세 번째 인자로 이름을 한 번 더 입력
module.exports = mongoose.model('Photo', PhotoSchema, 'Photo1');
