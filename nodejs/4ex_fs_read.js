const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express();
const port = process.env.PORT || 3005;
const _path = path.join(__dirname, './')


app.use('/', express.static(_path))
app.use(logger('tiny'))


app.get('/files', (req, res) => {
    fs.readdir(_path, 'utf-8', (err, data) => {

        let list = '<body style="background:black;"><h1 style="text-align:center; color:gold;">Content</h1>'
        list += `<a href="/${data[27]}/dist" style="display:block; background-color:white; padding:10px; box-shadow:inset 0 0 5px 2px black">포트폴리오</a><br>`
        data.forEach((el, i) => {
            list += `<a href="/${el}" style="text-decoration:none; display:block; background-color:white; padding:10px; box-shadow:inset 0 0 5px 2px black">${i + 1}__${el}</a><br>`
        })

        list+='</body>'
        console.log(data.length)
        res.send(list)
    })
})


app.listen(port, () => {
    console.log(port)
})