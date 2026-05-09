const fs = require('fs')
const path = require('path')
const http = require('http')

const root = __dirname

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
}

http.createServer((req, res) => {
  const url = req.url.split('?')[0]
  let filePath = path.join(root, url)

  if (!path.extname(filePath) || !fs.existsSync(filePath)) {
    filePath = path.join(root, 'index.html')
  }

  const ext = path.extname(filePath)
  const contentType = mime[ext] || 'application/octet-stream'

  try {
    const content = fs.readFileSync(filePath)
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(content)
  } catch {
    res.writeHead(404)
    res.end('Not found')
  }
}).listen(process.env.PORT)
