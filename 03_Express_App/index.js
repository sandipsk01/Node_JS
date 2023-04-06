const express=require('express');
const port=8000;
const path=require('path');
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/', function(req, res){
    console.log(__dirname);   
    //console.log(req);
    //res.send('<h1>Cool, It is running! or is it?</h1>');
    return res.render('home',{title:"Dynamic Title"});
});
app.get('/practice', function(req, res){
    return res.render('practice',{
        title:"Practice"});
});
app.listen(port, function(err){
    if(err){
        console.log('Error in running the Server', err);
    };
     console.log('Yup! My Express server is running on port: ', port);
});