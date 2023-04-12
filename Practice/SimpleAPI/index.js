const http= require('http');
const appData= require('./appData');

http.createServer((req, resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(appData));
    resp.end();
}).listen(3000);