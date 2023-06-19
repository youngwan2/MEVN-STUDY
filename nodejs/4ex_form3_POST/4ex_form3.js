const express = require('express')
const app = express();
const port = 3000;
const _path = __dirname +'/4ex_dist'

app.use('/',express.static(_path))

/* POST 해석 */
app.use(express.json()) // post 방식으로
app.use(express.urlencoded({ extended: true })) // 쿼리스트링 해석 방식을 지정함






app.post('/info', (req,res) => {
    const obj = req.body
    console.log(obj)
    console.log(obj.id)
    console.log(obj.pw)

})

app.listen(port, () => {
    console.log(port)
})