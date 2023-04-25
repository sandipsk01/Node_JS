const dbConnect=require('./dbconnect');

const deleteData=async ()=>{
    let data=await dbConnect();
    let result=await data.deleteMany({name:'A5'})
    console.warn(result);
    if(result.acknowledged){
        console.log('Record Deleted')
    }
}

deleteData();