var http = require('http'); // http é uma api nativa do node
var handle = require('./handle');
var s = require('./name');

// function handle(request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     response.write('<!DOCTYPE "html">');
//     response.write('<html>');
//     response.write('<head><title>Http Module</title></head>');
//     response.write('<body>');
//     response.write('<h1>Hello from http module SON</h1>');
//     response.write('</body>');
//     response.write('</html>');
    
//     response.end();
// }

console.log(s.name.b());
//console.log(handle);
var server = http.createServer(handle.fn);

server.listen(3000, function () { // function de callback
    console.log('Server is listening at port 3000');
});