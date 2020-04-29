const http = require('http')

const host = 'localhost'
const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// })

// server.listen(port, host, () => {
//   console.log(`server running at http://${host}:${port}`)
// })

function createApplication () {
  return {
    get() {
      console.log('get')
    },
    listen(port,cb) {
      const server = http.createServer((req, res) => {
        console.log('http.createServer...');
      })
      // return server.listen(port, cb)
      return server.listen.apply(server, arguments)
    }
  }
}

exports = module.exports = createApplication