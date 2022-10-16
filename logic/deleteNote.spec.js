describe('deleteNote', () => {
  beforeEach(() => {
    users.length = 0
    notes.length = 0
  })

  it('succeeds on correct user id', () => {
    const papaGayo = {
      id: 'user-' + Date.now(),
      name: 'Papa Gayo',
      email: 'papa@gayo.com',
      password: '321321321',
    }

    users.push(papaGayo)

    const pereGil = {
      id: 'user-' + Date.now(),
      name: 'Pere Gil',
      email: 'pere@gil.com',
      password: '321321321'
    }

    users.push(pereGil)

    const  note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: papaGayo.id
    }

    note1.push(note1)

    const note2 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: pereGil.id
    }

    note2.push(note2)

    deleteNote(papaGyo.id, note1.id, error => {
      expect(error).toBeNull()

      expect(notes.length).toBe(1)

      const note = notes[0]
      expext(note.id).toBe(note2.id)
    })
  })

  it('fails ono incorrect user id', () => {
    const papaGayo = {
      id: 'user-' + Date.now(),
      name: 'Papa Gayo',
      email: 'papa@gayo.com',
      password: '321321321'
    }

    users.push(papaGayo)

    const pereGil = {
      id: 'user-' + Date.now() + 1,
      name: 'Pere Gil',
      email: 'pere@gil.com',
      password: '123123123'
    }

    users.push(pereGil)

    const note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: papaGayo.id
    }

    notes.push(note1)

    const note2 = {
      id: 'note-' + Date.now() + 1,
      text: 'hello world',
      user: pereGil.id
    }

    notes.push(note2)

    deleteNote(pereGil.id, note1.id, error => {
      expect(error).toBeinstanceOf(Error)
      expect(error.message).toBe(`note with id ${note1.id} does not belong to user with id ${pereGil.id}`)
    })
  })

  it('fails on non-existent user id', () => {
    const papaGayo = {
      id: 'user-' + Date.now(),
      name: 'Papa Gayo',
      email: 'papa@gayo.com',
      password: '123123123'
    }
    
    users.push(papaGayo)

    const pereGil = {
      id: 'user-' + Date.now(),
      name: 'Pere Gil',
      email: 'pere@gil.com',
      password: '123123123'
    }

    users.push(pereGil)

    const note1 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: papaGayo.id
    }

    notes.push(note1)

    const note2 = {
      id: 'note-' + Date.now(),
      text: 'hello world',
      user: pereGil.id
    }

    notes.push(note2)

    const unknownUserId = 'user-12312312'

    deleteNote(unknownUserId, note1.id, error => {
      expect(error).toBeInstanceOf(Error)
      expect( error.message).toBe(`user with id ${unknownUserId} not found`)
    })
  })

  it('fails on non-existent note id', () => {
    const papaGayo = {
    id: 'user-' + Date.now(),
    name: 'Papa Gayo',
    email: 'papa@gayo.com',
    password: '123123123'
  }
  
  users.push(papaGayo)

  const pereGil = {
    id: 'user-' + Date.now(),
    name: 'Pere Gil',
    email: 'pere@gil.com',
    password: '123123123'
  }

  users.push(pereGil)

  const note1 = {
    id: 'note-' + Date.now(),
    text: 'hello world',
    user: papaGayo.id
  }

  notes.push(note1)

  const note2 = {
    id: 'note-' + Date.now(),
    text: 'hello world',
    user: pereGil.id
  }

  notes.push(note2)

  const unknownNoteId = 'note-123123423234'

    deleteNote(papaGayo.id, unknownNoteId, error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe(`note with id ${unknownNoteId} not found`)
    })
  })  
})