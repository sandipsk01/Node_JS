//require the library
const mongoose=require('mongoose');

//connect to the database 
mongoose.connect('mongodb://0.0.0.0/contacts_list_db');

//acquire the connection (to check if is successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running the print message
db.once('open',function(){
    console.log('Successfully connected to db.')
});