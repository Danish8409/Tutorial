const http = require('http')
const fs = require('fs')
const port = 8080

const p = http.createServer(function(req, res) {
res.writeHead(200, { 'Content-Type': 'text/html' })
fs.readFile('index.html', function(error, data) {
  if (error) {
    res.writeHead(404)
res.write('Error: File not found')
} else {
    res.write(data)
 }
 res.end()
 })
})

p.listen(port, function(error) {
  if(error) {
    console.log('ERROR', error)
  } else {
    console.log('Server is listening to port', port)
  }
})
