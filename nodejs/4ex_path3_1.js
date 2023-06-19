
const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
    const id = req.query.id;
    console.log(req.query)

    const arr = ['돈', '돈돈', '돈돈돈', '돈돈돈돈', '돈돈돈돈돈','돈돈돈돈돈돈','돈돈돈돈돈돈돈']

    let render = `<body><h1>${1+id*1||"ㅇㄴㄹㄴㄹㄴ"}단계: ${arr[id]||"없음"}</h1>`

    for (let i = 0; i <arr.length; i++) {
        render += `<a href="/user?id=${i}">${arr[i]}</a></br>`
    }
    for (let i = arr.length-1; i>0; i--) {
        render += `<a href="/user?id=${i-1}">${arr[i-1]}</a></br>`
    }

    render+='</body>'
    res.send(render)
})

app.get('/user/item', (req, res) => {

    res.send('fdsfdsfjklsjfkljfdls')
})


app.listen(port, () => {
    console.log(port, '서버 오픈!')
}).params

