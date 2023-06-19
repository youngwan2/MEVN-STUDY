const express = require('express')
// const path =require('path')
const logger = require('morgan')
const app = express();

const PORT = 3000;

const _path = __dirname + '/4ex_dist'
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('combined'))

// done 경로로 요청이 오면 로그인 정보를 처리하는 라우터
app.get('/done', (req, res) => {
    console.log(req.body)

    const name = req.query.username;
    const age = req.query.age;
    const content = req.query.content;

    console.log("이름:",name, "나이:", age,"내용:", content)

    // res.sendFile(__dirname +'/4ex_dist/done.html')
    res.redirect('/done.html')
})








app.listen(PORT, () => {
    console.log(`너의 서버는? ${PORT}!`)
})


