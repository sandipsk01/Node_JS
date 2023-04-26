const express = require('express');
const path = require('path');
const port = 8001;

const db = require('./config/mongoose');
const Contact=require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){
    Contact.find({})
        .catch((err)=>{
            console.log('Error in fetching contacts from db');
            return;
        })
        .then((contacts)=>{
            res.render ('home',{
            title: "Contact List",
            contact_list:contacts
        })});
    
})
app.post('/create-contact', function(req, res){
    
    //contactList.push(req.body);

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
        .then((newContact)=>{
            console.log(newContact);
            return res.redirect('back');
        })
        .catch((error) => {
            console.log('err in creating contact!');
            return;
        })

    //we can not use callbacks in model  .create() or .find() etc.

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


app.get('/delete-contact/', function(req, res){
    //get the id from query in the url
    let id = req.query.id

    //find the contact in the databse using id and index
    Contact.findByIdAndDelete(id)
    .catch((err)=>{
        console.log('error in deleting object from the database');
        return;
    })
    .then(()=>{
        return res.redirect('back');
    });
});
