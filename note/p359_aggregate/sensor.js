const mongoose = require('mongoose')
const Schema = mongoose.Schema


// 스키마 정의
const sensorSchema = new Schema({
    cnt :Number,
    id: Number,
        time:Date,
        temp:Number,
        wv:Number,
        humi: Number
})

// Sensor 라는 이름으로 모델(테이블)을 생성 후 내보냄
module.exports = mongoose.model('Sensor', sensorSchema)