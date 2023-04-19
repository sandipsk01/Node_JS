module.exports= reqFilter=(req,resp,next)=>{     
        if(!req.query.age){
            resp.send("Please provide an age")
        }else if (req.query.age<18){
            resp.send("You are under aged")
        }else{
            next();
        }
    }


    //make middlewares in seperate file bcoz we can have multiple middlewares