/* 라우팅 설정하기 */
const express = require('express')
const app = express();


const loogger = require('morgan')

const PORT = 3000

app.use(loogger('tiny'))

const s_module= require('./module.js')

app.get('/', s_module.intro)

// 사용자가 :에 입력한 값은 req 객체의 params 속성에 담긴다. 
app.get('/users/:userName/books/:bookName',s_module.handleBook)


app.listen(PORT,()=>{   
    console.log(PORT,"서버 오픈")
})

