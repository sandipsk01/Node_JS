const express=require('express');
const path=require('path');

const app=express();
const pagePath=path.join(__dirname,'Pages');

//app.use(express.static(pagePath));    // static : To access and display all the static content from Pages folder

app.get('',(req,resp)=>{
    resp.sendFile(`${pagePath}/index.html`);
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${pagePath}/about.html`);
})

app.get('/career',(req,resp)=>{
    resp.sendFile(`${pagePath}/career.html`);
})

app.get('*',(req,resp)=>{                  // * : for all invaild urls
    resp.sendFile(`${pagePath}/invalid.html`);
})

app.listen(5000);