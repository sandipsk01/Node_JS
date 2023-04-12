const fs= require('fs');
const path= require('path');

const dirPath= path.join(__dirname,'files');

// To create multiple files in specific directory

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, `it is sample file hello${i}`);
// };

// To list out the files

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
});