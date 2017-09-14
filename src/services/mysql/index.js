
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ubuntu',
  database: 'restful_ws'
})

const errorHandler = (error, msg, rejectFunction) => {
  console.log(error)
  rejectFunction({error: msg})
}

const categoryModule = require('./categories')({ connection, errorHandler })
// const productModule = require('./products')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule
  // products: () => productModule
}
