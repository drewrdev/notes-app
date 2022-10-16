class MenuPanel extends Component {
  constructor() {
      super(`<div class="menu-panel">
          <ul class="menu-panel__list">
            <li class="menu-panel__list-item-settings"></li>
            <li class="menu-panel__list-item-logout"></li>
          </ul>
      </div>`)

      const settingsButton = new IconButton('settings')
      settingsButton.onClick = () => this.onSettingsButtonClick()

      const logoutButton = new IconButton('logout')
      logoutButton.onClick = () => this.onLogoutButtonClick()

      this.menuPanelList = this.container.querySelector('.menu-panel__list')

      const menuPanelListItemSettings = this.menuPanelList.querySelector('.menu-panel__list-item-settings')
      this.menuPanelListItemSettings = menuPanelListItemSettings
      menuPanelListItemSettings.append(settingsButton.container)

      const menuPanelListItemLogout = this.menuPanelList.querySelector('.menu-panel__list-item-logout')
      menuPanelListItemLogout.append(logoutButton.container)
    }

    onLogoutButtonClick = null

    onSettingsButtonClick = null

  showSettingsButton() {
      this.menuPanelList.prepend(this.menuPanelListItemSettings)
  }

  hideSettingsButton() {
      this.menuPanelList.removeChild(this.menuPanelListItemSettings)
  }
}