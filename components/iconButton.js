class IconButton extends Component {
  constructor(text) {
    super(`<button class="transparent-button"><span class="material-symbols-outlined">${text}</span></button>`)

    this.container.onclick = () => this.onClick()
  }

  onClick = null

  click() {
    this.container.click()
  } 
  
}