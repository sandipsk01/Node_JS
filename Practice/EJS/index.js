const express=require('express');
const app=express();

app.set('view engine','ejs');    // it is always common
// app.set('views', 'path')    to give path where views has created
app.get('',(req, resp)=>{
    const user={
        name:'Sandip',
        email:'sandipkalekar808@gmail.com',
        skills:['html', 'css', 'js', 'node']
    }
    resp.render('profile',{user});    //rendering profile page from views
})

app.listen(8000);

//use '<%-' to include one ejs file into another ejs file
//<%- include('common/header'); %>  