const http = require('http');
function handler(req, res){
    res.writeHead(200,{'Content-type':'type/plain'});
}

const server = http.createServer(handler);