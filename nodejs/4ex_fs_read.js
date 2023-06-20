const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')


const app = express();
const port = process.env.PORT || 3005;
const _path = path.join(__dirname,'./')



app.use('/', express.static(_path))
app.use(logger('tiny'))


app.get('/files',(req,res)=>{
    fs.readdir(_path,'utf-8',(err,data)=>{

        let list =''
        data.forEach((el,i)=>{
           list+=`<p style="background-color:white; padding:5px; box-shadow:inset 0 0 5px 2px black">${el}</p>`
        })
        console.log(data)
        res.send(list)

        
    })
})


app.listen(port,()=>{
    console.log(port)
})