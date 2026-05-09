const fs = require('fs')
const path = require('path')
const http = require('http')

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'))

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end(indexHtml)
}).listen(process.env.PORT)
