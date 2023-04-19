const express=require('express');
const reqFilter=require('./mw')
const app=express();
const route=express.Router();
// Middleware only used with routes
// const reqFilter=(req,resp,next)=>{     //next routes will not run until next() provided
//     if(!req.query.age){
//         resp.send("Please provide an age")
//     }else if (req.query.age<18){
//         resp.send("You are under aged")
//     }else{
//         next();
//     }
// }

// app.use(reqFilter);     // to use application level middleware
route.use(reqFilter);    // for multiple routes

app.get('',(req,resp)=>{
    resp.send("Welcome To Home Page")
})

app.get('/Profile',reqFilter,(req,resp)=>{    // to use router level middleware. We can use like this for multiple routes but best practice is to use router for multiple rotes
    resp.send("Welcome To Profile Page")
})

route.get('/contact',(req,resp)=>{
    resp.send("Welcome To contact Page")
})

route.get('/career',(req,resp)=>{       //route.get for applying middleware
    resp.send("Welcome To career Page")
})

app.use('/',route);         //medatory

app.listen(2000);

// Types of middleware 
//application level, router level, error handling, built in, third party