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

//---ch-6----------------------------

// const http = require('http');

// http.createServer((req, res) => {
//   if (req.url === '/users') {
//     res.end('User list endpoint');
//   } else {
//     res.end('H rte');
//   }
// }).listen(3000);

// ch-7 ----------------------------------

// const http = require('http');

// http.createServer((req, res) => {
//   if (req.method === 'GET') res.end('Fetching data');
//   else if (req.method === 'POST') res.end('Creating data');
//   else if (req.method === 'PUT') res.end('Updating data');
//   else if (req.method === 'DELETE') res.end('Deleting data');
//   else res.end('Unsupported method');
// }).listen(3000);

//-----ch-8-------------------------------

// const http_one = require('http');

// http_one.createServer((req, res) => {
//   if (req.url === '/okk') {
//     res.writeHead(200);
//     res.end('Success');
//   } else if (req.url === '/error') {
//     res.writeHead(500, { 'Content-Type': 'text/plain' }); // Example: 500 error with a header
//     res.end('An unexpected server error occurred.');
//   } else {
//     res.writeHead(404);
//     res.end('Not Found');
//   }
// }).listen(3000);

//ch--9

// const http = require('http');

// http.createServer((req, res) => {
//   console.log('Request Headers:', req.headers); // Request headers

//   let body = '';
//   req.on('data', chunk => body += chunk); // Collect chunks of data
//   req.on('end', () => {
//     console.log('Request Body:', body);
//     res.setHeader('Content-Type', 'text/plain'); // Response header
//     res.end('Received!');
//   });
// }).listen(3000);

//ch--10

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome to Skiller Backend! by arun');
// });

// server.listen(5000, () => console.log('Listening on port 5000'));

//ch-11

// const http = require('http');

// http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page');
//   } else if (req.url === '/about') {
//     res.end('About Page');
//   } else {
//     res.writeHead(404); // Set 404 status code
//     res.end('Page Not Found');
//   }
// }).listen(3000);

// const http = require('http');

// http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page');
//   } else if (req.url === '/about') {
//     res.end('About Page');
//   } else if (req.url === '/contact') { // New route added
//     res.end('Contact Us at abc@gmail.com');
//   } else {
//     res.writeHead(404);
//     res.end('Page Not Found');
//   }
// }).listen(3000);

//ch---12

// const http = require('http');

// http.createServer((req, res) => {

//   if (req.url === '/text') {

//     res.setHeader('Content-Type', 'text/plain');

//     res.end('Plain text response');
//   } 

//   else if (req.url === '/html') {
    
//     res.setHeader('Content-Type', 'text/html');

//     res.end('HTML response This is rendered content.');
//   } 

//   else if (req.url === '/json') {

//     res.setHeader('Content-Type', 'application/json');

//     res.end(JSON.stringify({ message: 'JSON response', data: [1, 2, 3] }));


//   } else {

//     res.writeHead(404);

//     res.end('Not Found');
//   }
// }).listen(3000);

// const http = require('http');
// const url = require('url'); // Import the 'url' module

// http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true); // Parse URL with query string
//   const path = parsedUrl.pathname;
//   const query = parsedUrl.query;

//   if (path === '/text') {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Plain text response');
//   } else if (path === '/html') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('HTML responseThis is rendered content.');
//   } else if (path === '/json') {
//     res.setHeader('Content-Type', 'application/json');
//     if (query.error === 'true') { // Check for error query parameter
//       res.writeHead(400);
//       res.end(JSON.stringify({ "error": "Invalid request parameter" }));
//     } else {
//       res.writeHead(200); // Explicitly set 200 for clarity
//       res.end(JSON.stringify({ message: 'JSON response', data: [1, 2, 3] }));
//     }
//   } else {
//     res.writeHead(404);
//     res.end('Not Found');
//   }
// }).listen(3000);

//ch----13------------------

const http = require('http');

http.createServer((req, res) => {
  let body = '';

  // Collect data chunks from the request stream
  req.on('data', chunk => {
    body += chunk;
  });

  // When all data is received
  req.on('end', () => {
    try {
      const data = JSON.parse(body); // Parse the JSON string
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Received name: ${data.name}`);
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid JSON data');
    }
  });
  
  // Handle potential errors during request streaming
  req.on('error', err => {
    console.error('Request stream error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' }).end('Server Error');
  });
  
}).listen(3000);
console.log("Server is running on port no 3000");
