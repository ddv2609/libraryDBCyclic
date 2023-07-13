// server.js
const jsonServer = require('json-server')
// Import the library:
const cors = require('cors');

const server = jsonServer.create()
// Then use it before your routes are set up:
server.use(cors());

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})
