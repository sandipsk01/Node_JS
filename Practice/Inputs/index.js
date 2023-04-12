const fs = require('fs');   //filesystem module

const input = process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);   // to create file
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);    // to remove file
}else{
    console.log('Invalid Input');
}