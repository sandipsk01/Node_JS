const {MongoClient}=require('mongodb');
const url='mongodb://0.0.0.0:27017';
const client=new MongoClient(url);

async function dbConnect(){
    let result=await client.connect();
    let db=result.db('e-com');
    return db.collection('products');
}

module.exports=dbConnect;