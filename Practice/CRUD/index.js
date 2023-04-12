const fs=require('fs');
const path=require('path');

const dirPath=path.join(__dirname,'files');
const filePath=`${dirPath}/sampleFile.txt`;

fs.writeFileSync(filePath,'This is the sample file.');     // to create file

fs.readFile(filePath,'utf-8',(err,item)=>{          // to read content of file
    console.log(item);
})

fs.appendFile(filePath,' And has some text.',(err)=>{       // to append content in file
    if(!err){
        console.log('file is updated')
    }
})

fs.rename(filePath, `${dirPath}/sample.txt`,(err)=>{        // to rename the file
    if(!err){
        console.log('File name is updated')
    }
})

fs.unlinkSync(`${dirPath}/sample.txt`);     // to delete the file

// when we perform any fs operation in node js it needs some memory is called buffer