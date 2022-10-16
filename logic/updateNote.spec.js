describe('updateNote', () => {
  beforeEach(() => {
    users.length = 0
    notes.length = 0
  })

  it('succeeds for an existing user', () => {
    const paTata = {
      id: 'user-' + Date.now(),
      name: 'Pa Tata',
      email: 'pa@tata.com',
      password: '321321321'
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

    updateNote(cucaRacha.id, note1.id, 'hola mundo', error => {
      expect(error).toBeNull()

      expect(notes.length).toBe(1)

      const note1 = notes[0]
      expect(note1.id).toBeDefined()
      expect(note1.text).toBe('hola mundo')
      expect(note1.user).toBe(cucaRacha.id)
    })
})

    it('fails for a non-existent user', () => {
    const poRoto = {
      id: 'user-' + Date.now(),
      name: 'Po Roto',
      email: 'po@roto.com',
      password: '321321321'
    }
    
    users.push(poRoto)

    const peLudo = {
      id: 'user-' + Date.now(),
      name: 'Pe Ludo',
      email: 'pe@ludo.com',
      password: '321321321'
    }

    users.push(peLudo)

    const note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: peLudo.id
    }

    notes.push(note1)

    const unknownUserId = 'user-123123213'

    updateNote(unknownUserId, note1.id, 'hola mundo', error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('user with id ' + unknownUserId + ' not found')
    })
})

  it('fails for a non-existent note', () => {
    const poRoto = {
      id: 'user-' + Date.now(),
      name: 'Po Roto',
      email: 'po@roto.com',
      password: '321321321'
    }
    
    users.push(poRoto)

    const peLudo = {
      id: 'user-' + Date.now(),
      name: 'Pe Ludo',
      email: 'pe@ludo.com',
      password: '321321321'
    }

    users.push(peLudo)

    const note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: peLudo.id
    }

    notes.push(note1)

    const unknownNoteId = 'note-123123213'

    updateNote(peLudo.id, unknownNoteId, 'hola mundo', error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('note with id ' + unknownNoteId + ' not found')
    })
  })

  it ('fails for a incorrect user (note does not belong to him)', () => {
    const poRoto = {
      id: 'user-' + 3456789,
      name: 'po Roto',
      email: ' por@roto.com',
      password: '321321321'
    }

    users.push(poRoto)

    const peLudo = {
      id: 'user-' + Date.now(),
      name: 'Pe Ludo',
      email: 'pe@ludo.com',
      password: '321321321'
    }

    users.push(peLudo)

    const note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: peLudo.id
    }

    notes.push(note1)

    updateNote(poRoto.id, note1.id, 'hola Mundo', error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('note with id ' + note1.id + ' does not belong to user with id ' + poRoto.id)
    })
  })
})