

var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    
    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */

    if(fileName === "todo")
    {
        fileName = 'todo.json';
    }
    else if(fileName === "read-todo")
    {
        fileName = 'fetch.html';
    }
    else
    {
        fileName = 'index.html';
    }
    

    /* lets try to read the html page found */
    fileSystem.readFile(fileName , callback);

    function callback(err, data) {
        if (fileName === 'todo.json') {          
            response.writeHead(200, {'Content-Type': 'application/json'});   
            response.write(data.toString());
        }  
        else if (fileName === 'fetch.html') {          
            response.writeHead(200, {'Content-Type': 'text/html'});   
            response.write(data.toString());
        }  
        else if (fileName === 'read-todo.html') {          
            response.writeHead(200, {'Content-Type': 'text/html'});   
            response.write(data.toString());
        }        
        else {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(data.toString());
        }     
        
        /* the response is complete */
        response.end();
    }

   
}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/index.html');
