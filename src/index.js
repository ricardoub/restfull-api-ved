
const server = require('./server')

server.get('/', (req, res, next) => {
  res.send('Enjoy the silence...!')
  next()
})
server.listen('3456')
