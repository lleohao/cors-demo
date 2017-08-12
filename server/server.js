const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5051;
const indexHtml = fs.readFileSync(path.resolve(__dirname, './index.html'));

const server = http.createServer((req, res) => {
    if (req.url === '/index.html') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(indexHtml);
        return;
    }

    // 区分是否需要响应cors
    if (/cors/.test(req.url)) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');


        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('hhh');
    } else if (/no-domain/.test(req.url)) {
        res.setHeader('Access-Control-Allow-Origin', 'http://api.bob.com');

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('hhh');
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('hhh');
    }
});

server.listen(port);
console.log('server listen on http://localhost:5051');
