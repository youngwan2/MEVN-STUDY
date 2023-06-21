const express = require('express')
const path = require('path') 
const fs = require('fs') // 노드js 내부의 fs 패키지를 가져옴
const morgan = require('morgan') // 로그에 대한 설명을 간략하게 정리해주는 미들웨어
const app = express();

const _path = path.join(__dirname, './')
app.use('/', express.static(_path))
app.use(morgan('tiny'))


fs.writeFile('./text.txt', "글을 적읎시다.작성한 내용이 txt 파일 내부로!", (err) => {
    console.log(err)
    fs.readFile('./text.txt', 'utf-8', (err, result) => {
        console.log(result)
    })
})


app.get('/', (req, res) => {



})


app.listen(port, () => {
    console.log(`서버가 열렸습니다.(포트: ${port})`)
})

