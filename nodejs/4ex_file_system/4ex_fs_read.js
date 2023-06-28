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
        // console.log(Array.isArray(data))
        let list = '<body style="background:black;"><h1 style="text-align:center; color:gold;">Content</h1>'
        data.forEach((el, i) => {
            if (el.indexOf('.') === -1) {
                list += `<a href="#"  style="text-decoration:none; display:block; background-color:white; padding:10px; box-shadow:inset 0 0 5px 2px black">폴더임</a><br>`
            } else {
                list += `<a href="/${el}" style="text-decoration:none; display:block; background-color:white; padding:10px; box-shadow:inset 0 0 5px 2px black">${i + 1}__${el}</a><br>`
            }
        })

        list += '</body>'
        console.log(data.length + '개의 목록이 있습니다.')
        res.send(list)
    })
})


app.get('del/:filename', (req, res) => {
    const targetFile= req.params.filename
    console.log(targetFile)

    fs.unlink(_path+'/'+targetFile, (err) => {
        if (err) throw err;
        console.log("제거되었다.")
    })

    send("삭제성공?")
})


app.listen(port, () => {
    console.log(port)
})