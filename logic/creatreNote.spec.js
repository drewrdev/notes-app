describe('createNote', () =>{
  beforeEach(() => {
    users.length = 0
    notes.length = 0
  })

  it('succeds for an existing user', () => {
    const paTata = {
      id: 'user-' + Date.now(),
      name: 'pa Tata',
      email: 'pa@tata.com',
      password: '321321321',
    }

    users.push(paTata)

    const cucaRacha = {
      id: 'user-' + Date.now(),
      name: 'Cuca Racha',
      email: 'cuca@racha.com',
      password: '321321321'
    }

    users.push(cucaRacha)

    const note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: cucaRacha.id
    }

    notes.push(note1)

    createNote(paTata.id, error => {
      expect(error).toBeNull()

      expect(notes.length).toBe(2)

      const note2 = notes[1]
      expect(note2.id).toBeDefined()
      expect(note2.text).toBe('')
      expect(note2.user).toBe(paTata.id)
    })
  })

  it('fails for a non-existent user', () => {
    const poRoto = {
      id:'user-' + Date.now(),
      name: 'Po Roto',
      email: 'po@roto.com',
      password: '321321321'
    }
    
    users.push(poRoto)

    const peLudo = {
      id: 'user-' + Date.now(),
      name: 'Pe Ludo',
      email: 'pe@ludo.com',
      password: '123123123'
    }

    users.push(peLudo)

    const note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: peLudo.id
    }

    notes.push(note1)

  const unknownUserId = 'note-73323183'

    createNote(unknownUserId, error => {
      expect(error).toBeInstaceOf(Error)
      expect(error.message).toBe('user with id ' + unknownUserId + ' not found')
    })
  })
})