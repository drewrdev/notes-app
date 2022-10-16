const loginPage = new LoginPage
const registerPage = new RegisterPage
const homePage = new HomePage


loginPage.onLinkClick(function () {
  document.body.removeChild(loginPage.container)
  document.body.append(registerPage.container)
})

loginPage.onFormSubmit(function(email, password) {
  try {
    authenticateUser(email, password, function (error,token) {
      if (error) {
        alert(error.message)

        return
      }

      loginPage.reset()

      sessionStorage.token = token

      document.body.removeChild(loginPage.container)

      renderHome()
    })
  } catch (error) {
    alert(error.message)
  }
})

homePage.onDeleteNote = function (noteId) { //method overriding
  try {
    deleteNote(sessionStorage.token, noteId, error => {
      if(error) {
        alert(error.message)

        return
      }

      renderList()
    })
  } catch (error) {
    alert(error.message)
  }
}  

homePage.onUpdateNote = function(noteId, text) {
  try {
    updateNote(sessionStorage.token, noteId, text, error => {
      if (error) {
        alert(error.message)

        return
      }
    })
  } catch (error) {
    alert(error.message)
  }
}

homePage.onLogoutButtonClick = function () {
  delete sessionStorage.token

  document.body.removeChild(homePage.container)
  document.body.append(loginPage.container)
}

homePage.onAddNote = function () {
  try {
    createNote(sessionStorage.token, error => {
      if (error) {
        alert(error.message)

        return
      }

      renderList()
    })
  } catch (error) {
    alert(error.message)
  }
}

homePage.onUpdatePassword = function(oldPassword, newPassword, newPasswordRepeat) {
  try {
    updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
      if (error) {
        alert(error.message)

        return
      }

      alert('Password Update')
    }) 
  } catch(error) {
    alert(error.message)
  }
}

registerPage.onLinkClick(function() {
  document.body.removeChild(register.container)
  document.body.append(login.container)
})

registerPage.onFormSubmit(function (name, email, password){
  try {
    registerUser(name, email, password, function (error) {
      if (error) {
        alert(error.message)

        return
      }

      registerPage.reset()

      document.body.removeChild(registerPage.container)
      document.body.append(loginPage.container)
    })
  } catch (error) {
     alert(error.message)
  }
})

function renderHome() {
  try {
    retrieveUser(sessionStorage.token, function (error,user){
      if(error) {
        alert(error.message)

        return
      }

      homePage.setName(user.name)

      renderList(function() {
        document.body.append(homePage.container)
      })
    })
  } catch (error) {
    alert(error.message)
  }
}

function renderList(callback) {
  try {
    retrieveNotes(sessionStorage.token, function (error,notes) {
      if(error) {
        alert(error.message)

        return
      }

      homePage.renderList(notes)

      if (callback)
          callback()
    })
  } catch (error) {
    alert(error.message)
  }
}

if(sessionStorage.token)
   renderHome()
else
  document.body.append(loginPage.container)