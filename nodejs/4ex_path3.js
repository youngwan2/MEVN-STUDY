
const express = require('express');
const app = express();
const port = 3000;


app.get('/user', (req, res) => {
    const id = req.query.id;
    console.log(req.query)

    const arr = ['my life is egg', 'The Avengers are Back', 'javascript is good enough']

    res.send(`
    <body>
        <h1>${arr[id]}</h1>
        <a href="/user?id=0">Life</a>
        <a href="/user?id=1">Hero</a>
        <a href="/user?id=2">Javascript</a>
    </body>
    `)
})

app.get('/user/item',(req,res)=>{

    res.send('fdsfdsfjklsjfkljfdls')
})


app.listen(port, () => {
    console.log(port, '서버 오픈!')
}).params

