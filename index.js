const express = require('express' )
const app = express()
const port = 3000

app.get('/trang-chu', (req, res)=>{
    res.send("Hello Express")
})// dinh nghia route /

app.listen(port, ()=>{
    console.log(`App are listening on port ${port}`)
}) // 127.0.0.1