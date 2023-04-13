let a=20;
let b=0;

// To resolve Asynchronous cons: Updated data in first func is not taken by second func if first takes time then to resolve it use Promise.
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})