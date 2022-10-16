function createNote (token, callback) {
  //Todo validate inputs
  if (typeof token !== 'string') throw new TypeError('token is not a string')
  if (token.trim().length === 0) throw new Error('token is empty or blank')

  if (typeof callback !== 'function') throw new TypeError('callback is not a function')

  const xhr = new XMLHttpRequest

  // response

  xhr.onload = function () {
    const status = xhr.status

    if (status >= 500)
      callback(new Error(`server error (${status})`))
    else if (status >= 400)
      callback(new Error(`client error (${status})`))
    else if (status === 200) {
      const json = xhr.responseText

      const data = JSON.parse(json)

      const notes = data.notes ? data.notes : []

      const note = {
        id: `note-${Date.now()}`,
        text: ''
      }

      notes.push(note)

      const xhr2 = new XMLHttpRequest

      // response

      xhr2.onload = function () {
      const status = xhr2.status

        if (status >= 500)
          callback(new Error(`server error (${status})`))
        else if (status >= 400)
          callback(new Error(`client error (${status})`))
        else if (status === 204)
          callback(null)
      }

      // request

      xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

      xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
      xhr2.setRequestHeader('Content-type', 'application/json')

      //const json2 = JSON.stringify({ notes: notes })
      const json2 = JSON.stringify({ notes })

      xhr2.send(json2)
    }
  }

  // request

  xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

  xhr.setRequestHeader('Authorization', `Bearer ${token}`)

  xhr.send()
}