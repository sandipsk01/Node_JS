const express = require('express');   // needed to install
const app = express();

app.get('',(req,res)=>{
    console.log('Data sent by browser =>>>', req.query.name)    // getting data send by browser like localhost:2000/?name=sandip
    res.send('Welcome, This is Home Page.')
})

app.get('/about',(req,res)=>{
    res.send('Welcome, This is About Page.')
})

app.listen(2000);