describe('registerUser', () => {
  beforeEach(() => {
      users.length = 0
  })

  it('succeeds on new user', () => { // happy path :)
      const name = 'Ana Conda'
      const email = 'ana@conda.com'
      const password = '321321321'

      registerUser(name, email, password, error => {
          expect(error).toBeNull()

          expect(users).toHaveSize(1)

          const user = users[0]
          expect(user.id).toBeDefined()
          expect(user.name).toBe(name)
          expect(user.email).toBe(email)
          expect(user.password).toBe(password)
      })
  })

  it('fails on already existing user', () => { // unhappy path :(
      const id = 'user-' + Date.now()
      const name = 'Cobra Taka'
      const email = 'cobra@taka.com'
      const password = '321321321'

      // const cobraTaka = {
      //     name: name,
      //     email: email,
      //     password: password
      // }
      const cobraTaka = {
          id,
          name,
          email,
          password
      }

      users.push(cobraTaka)

      registerUser(name, email, password, error => {
          expect(error).toBeInstanceOf(Error)
          expect(error.message).toBe('user already exists')

          expect(users).toHaveSize(1)

          const user = users[0]
          expect(user.name).toBe(name)
          expect(user.email).toBe(email)
          expect(user.password).toBe(password)
      })
  })
})