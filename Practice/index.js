const http = require('http');  // http module to handle req and resp

http.createServer((req, resp)=>{
    resp.write("<h1> Hello, My name is Sandip.</h1>");
    resp.end();
}).listen(4500);