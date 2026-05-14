const http = require('http');
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};
const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const safe = path.normalize(url === '/' ? '/index.html' : url).replace(/^([/\\])+/, '');
  const file = path.join(root, safe);
  if (!file.startsWith(root)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream'});
    res.end(data);
  });
});
server.listen(process.env.PORT, '127.0.0.1');
