const express =require('express')
// const path =require('path')
const logger = require('morgan')
const app = express();

const PORT = 3000;

const _path = __dirname+ '/dist'
console.log(_path)

app.use('/',express.static(_path))
app.use(logger('combined'))

/* 커스텀 미들웨어 */
app.use((req,res,next)=>{
    console.log('요청이 왔네요~ 지나갑니다~')
    next()
})

app.listen(PORT,()=>{
    console.log(`너의 서버는? ${PORT}!`)
})