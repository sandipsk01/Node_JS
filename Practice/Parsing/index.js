const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());     //express.urlencoded() middleware id must for parsing and getting data

var contactList = [
    {
        name: "Sandip",
        phone: "1111111111"
    }
]

app.get('/', function(req, res){
    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
    });
})


app.post('/create-contact', function(req, res){   // Get input from form
    contactList.push({
        name:req.body.name,      // req.body gives object of inputs
        phone:req.body.phone
    });
    //contactList.push(req.body);

    res.redirect('/');
});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})