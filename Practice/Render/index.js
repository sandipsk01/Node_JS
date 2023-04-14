const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`
    <h1>Welcome, This is Home Page.</h1>
    <a href="/about"> Go to About Page</a>
    `)
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="Username" value="${req.query.name}"/>
    <button>Click Me</button>
    `)
})

app.get('/API',(req,res)=>{
    res.send(`
        {
            name:"Sandip"
            contact:"9342342"
        },
        {
            name:"Sandip"
            contact:"9342342"
        }
    `)
})

app.listen(2000);