const dbConnect=require('./dbconnect');

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })

const main=async ()=>{
    let data= await dbConnect();
    data=await data.find().toArray();    //whenever we use toArray() it creates promise to solve that use await 
    console.warn(data);
}
main();