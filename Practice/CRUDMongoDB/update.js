const dbConnect=require('./dbconnect');

const updateData=async ()=>{
    let data=await dbConnect();
    let result=await data.updateOne(    //to update all the records having same condition use update();
        {name:'CE'},
        {$set:{name:'Nord CE',price:4000}}
    )
    console.warn(result);
}

updateData();