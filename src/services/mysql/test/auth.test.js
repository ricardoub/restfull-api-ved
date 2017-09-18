
const test = require('ava')

const { connection, errorHandler } = require('./setup')

const users = require('../users')({ connection, errorHandler })
const auth = require('../auth')({ connection, errorHandler })

const create = () => users.save('user@test.com', '7c4a8d09ca3762af61e59520943dc26494f8941b')

test.beforeEach(t => connection.query('TRUNCATE TABLE users'))
test.after.always(t => connection.query('TRUNCATE TABLE users'))

test('Login de usuário - sucesso', async t => {
  await create()
  const result = await auth.autenticate('user@test.com', '123456')
  t.not(result.token, null)
  t.not(result.token.length, 0)
})
