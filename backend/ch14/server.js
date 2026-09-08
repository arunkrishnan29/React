const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    if (req.url === '/') {

        const filePath = path.join(__dirname, 'public', 'index.html' );

        fs.readFile(filePath, (err, data) => {

            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                return res.end('File not found');
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(data);
        });

    }
    else if (req.url === '/styles.css') {

    const filePath = path.join(__dirname, 'public', 'styles.css');

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            return res.end('CSS file not found');
        }

        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        res.end(data);
    });

}
    else {

        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('Resource not found');
    }

}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});