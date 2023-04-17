const express=require('express');
const path=require('path');

const app=express();
const pagePath=path.join(__dirname,'Pages');

app.use(express.static(pagePath));    // static : To access and display all the static content from Pages folder

app.listen(5000);