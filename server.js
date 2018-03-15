var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response){
    response.writeHead(200, {'content-type':'text/javascript'});
    response.write("Error 404: page not found!");
    response.end();
}

function onRequest(request, response){

    if( request.method == 'GET' && request.url == '/' ){
        //response.writeHead(200, {'content-type':'text/javascript'});
        fs.createReadStream('index.html','utf8').pipe(response);
    }else{
        send404Response(response);
    }
}


http.createServer(onRequest).listen(8888);
console.log("Server is now running...");