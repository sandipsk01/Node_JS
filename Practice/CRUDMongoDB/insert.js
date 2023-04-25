const dbConnect=require('./dbconnect');

const insert=async ()=>{
    const db= await dbConnect();
    const result=await db.insertMany( // For inserting one record use insertOne
        [ 
            {"name": "A5", "brand": "vivo", "price": 1500},
            {"name": "CE", "brand": "OnePlus", "price": 2500}
        ])
    if(result.acknowledged){
        console.warn('Data Inserted')
    }
}

insert();