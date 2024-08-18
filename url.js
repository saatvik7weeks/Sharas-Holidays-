const http = require('http');
const url = require('url');
const fs = require('fs'); 

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse URL with query string

  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('form.html', (err, data) => {
      if (err) {
        res.end('Error loading form');
      } else {
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && parsedUrl.pathname === '/') {
    let formData = '';
    req.on('data', (chunk) => {
      formData += chunk.toString();
    });

    req.on('end', () => {
      const parsedData = url.parse('?' + formData, true).query; // Parse form data

      console.log('Form data:', parsedData);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Form submitted successfully!');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


