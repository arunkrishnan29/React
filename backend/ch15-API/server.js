// // const http = require('http');

// // http.createServer((req, res) => {
// //   if (req.url === '/api/users') {
// //     res.setHeader('Content-Type', 'application/json');
// //     // In a real app, this data would come from a database
// //     res.end(JSON.stringify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]));
// //   } 
// //   else if(req.url ==='/api/products'){
// //     res.setHeader('Content-Type', 'application/json');
// //     res.end(JSON.stringify([{id:1, name:'monitor'},{id:2, name:'CPU',}]))
// //   }
// //   else {
// //     res.writeHead(404, { 'Content-Type': 'text/plain' });
// //     res.end('API Endpoint Not Found');
// //   }
// // }).listen(3001);

// const http = require('http');

// http.createServer((req, res) => {

//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

//   if (req.url === '/api/users') {

//     res.setHeader('Content-Type', 'application/json');

//     res.end(JSON.stringify([
//       { id: 1, name: 'Alice' },
//       { id: 2, name: 'Bob' }
//     ]));

//   } else {

//     res.writeHead(404, { 'Content-Type': 'text/plain' });

//     res.end('API Endpoint Not Found');
//   }

// }).listen(3001, () => {
//   console.log('API server running on port 3001');
// });


const http = require('http');

http.createServer((req, res) => {

  res.setHeader(
    'Access-Control-Allow-Origin',
    'http://127.0.0.1:5500'
  );

  if (req.url === '/api/users') {

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]));

  } else {

    res.writeHead(404, { 'Content-Type': 'text/plain' });

    res.end('API Endpoint Not Found');
  }

}).listen(3001, () => {
  console.log('API server running on port 3001');
});