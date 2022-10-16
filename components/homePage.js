class HomePage extends Component {
  constructor() {
    super(`<div class="home-page container container--full container--distributed "> 
      <main class="main"> 
      
      </main>

      <footer class="footer">
        <button class="add-button transparent-button">+</button>
      </footer>
    </div>`)

    const addButton = this.container.querySelector('.add-button')
    addButton.onclick = () => {
      this.onAddNote()
    }

    const headerPanel = new HeaderPanel
    this.container.prepend(headerPanel.container)

    headerPanel.onMenuButtonClick = () => {
      if (main.contains(settingsPanel.container))
          headerPanel.hideMenuSettingsButton()
    }

    const footer = this.container.querySelector('.footer')

    headerPanel.onSettingsButtonClick = () => {
      if (footer.contains(addButton))
          footer.removeChild(addButton)

      main.removeChild(listPanel.container)
      main.append(settingsPanel.container)
    }

    const main = this.container.querySelector('.main')

    const settingsPanel = new SettingsPanel

    const listPanel = new ListPanel
    this.listPanel = listPanel
    main.append(listPanel.container)

    listPanel.onDeleteNote = noteId => this.onDeleteNote (noteId)
    listPanel.onUpdateNote = (noteId, text) => this.onUpdateNote(noteId, text)

    headerPanel.onLogoutButtonClick = () => {
      if (main.contains(settingsPanel.container)) 
          settingsPanel.close()

      this.onLogoutButtonClick()
    }

    settingsPanel.onUpdatePassword = (oldPassword, newPassword, newPasswordRepeat) => {
      this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
    }

    settingsPanel.onClose = () => {
      main.removeChild(settingsPanel.container)

      headerPanel.closeMenu()

      main.append(listPanel.container)
      footer.append(addButton)
    }
  } 

  setName(name) {
    this.container.querySelector('.title').innerText = 'Hello, ' + name + ' '
  }

  renderList(notes) {
    this.listPanel.renderList(notes)
  }

  onDeleteNote = null

  onUpdateNote = null

  onLogoutButtonClick = null

  onAddNote = null

  onUpdatePassword = null
}