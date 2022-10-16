class SettingsPanel extends Component {
  constructor() {
     super(`<div class="settings-panel container">
      <form class="update-password-form form">
        <div class="form__field">
          <label for="oldPassword">Current password</label>
          <input class="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword">
        </div>

        <div class="form__field">
          <label for="newPassword">New password</label>
          <input class="input" type="password" name="newPassword" placeholder="new password" id="newPassword">
        </div>

        <div class="form__field">
          <label for="newPasswordRepeat">Repeat new password</label>
          <input class="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat">
        </div>

        <button class="button" type="submit">Update</button>
      </form>
    </div>`)

    const updatePasswordForm = this.container.querySelector('.update-password-form')
    updatePasswordForm.onsubmit = event => {
      event.preventDefault()

      const oldPassword = updatePasswordForm.oldPassword.value
      const newPassword = updatePasswordForm.newPassword.value
      const newPasswordRepeat = updatePasswordForm.newPasswordRepeat.value

      this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
    }

    const closeButton = new IconButton('close')
    this.closeButton = closeButton
    closeButton.onClick = () => {
      this.onClose()
    }
    this.container.prepend(closeButton.container)
    }
  
  onUpdatePassword = null

  onClose = null

  close() {
    this.closeButton.click()
  }
}