const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("assets"))    // accessing static files
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

app.listen(port);