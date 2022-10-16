describe('authenticateUser', function () {
  beforeEach( function() {
    users.length = 0
  })

  it('succeeds on correct credentials', function () { // happy path :)
    const id = 'user-' + Date.now()
    const name = 'Alan Brito'
    const email = 'alan@brito.com'
    const password = '321321321'

    const alanBrito = {
      id,
      name,
      email,
      password
    }

    users.push(alanBrito)

    authenticateUser (email, password, error => {
      expect(error).toBeNull()

      expect(userId).toBe(id)
    })
  })

  it( 'fails on incorrect password', function () { //unhappy path :(
    const id = 'user-' + Date.now()
    const name = 'Ele Fante'
    const email = 'ele@fante.com'
    const password = '321321321'

    const eleFante = {
     id,
     name,
     email,
     password 
    }

    users.push(eleFante)

    authenticateUser(email, password + '-wrong', error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('wrong credentials')

      expect(userId).toBeUndefined()
    })
})

it('fails on incorrect email', function () { // unhappy path :(
    const id = 'user-' + Date.now()
    const name = 'Ele Fante'
    const email = 'ele@fante.com'
    const password = '321321321'

    const eleFante = {
        id,
        name,
        email,
        password
    }

    users.push(eleFante)

    authenticateUser('ele@fante.us', password, error => {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe('wrong credentials')

        expect(userId).toBeUndefined()
    })
  })
})