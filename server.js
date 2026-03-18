const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname);
const PORT = 8080;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.mp4':  'video/mp4',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
};

const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(ROOT, url);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
