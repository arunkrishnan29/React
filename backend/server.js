// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello server!');
// });

// server.listen(3000, () => console.log('Server running on port 3000'));

// ----

// const http = require('http');

// const server = http.createServer((req, res) => {

//   res.setHeader('Content-Type', 'application/json');

//   res.end(JSON.stringify({
//     message: 'Hello server!'
//   }));

// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


//-- 

// const http = require('http');

// http.createServer((req, res) => {
//   console.log(req.method, req.url); // Request info
//   res.end('Response sent!');        // Response
// }).listen(3000);

//---ch-6

// const http = require('http');

// http.createServer((req, res) => {
//   if (req.url === '/users') {
//     res.end('User list endpoint');
//   } else {
//     res.end('H rte');
//   }
// }).listen(3000);

// ch-7 

// const http = require('http');

// http.createServer((req, res) => {
//   if (req.method === 'GET') res.end('Fetching data');
//   else if (req.method === 'POST') res.end('Creating data');
//   else if (req.method === 'PUT') res.end('Updating data');
//   else if (req.method === 'DELETE') res.end('Deleting data');
//   else res.end('Unsupported method');
// }).listen(3000);

//-----ch-8

const http_one = require('http');

http_one.createServer((req, res) => {
  if (req.url === '/okk') {
    res.writeHead(200);
    res.end('Success');
  } else if (req.url === '/error') {
    res.writeHead(500, { 'Content-Type': 'text/plain' }); // Example: 500 error with a header
    res.end('An unexpected server error occurred.');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(3000);
