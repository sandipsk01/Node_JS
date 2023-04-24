const {MongoClient}=require('mongodb');
const url='mongodb://0.0.0.0:27017';    //localhost
const database='e-com';
const client=new MongoClient(url);   // client

async function getData(){
    let result= await client.connect();  //conection
    let db=result.db(database);
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();   //async to conert from promise to array
    console.log(response);
}

getData()