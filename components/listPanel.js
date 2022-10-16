class ListPanel extends Component {
  constructor() {
    super(`<ul class="list-panel list">
      <li class="list__item"><button class="list__item-delete-button">x</button>
        <p contenteditable="true" class="list__item-text">Hello, Note! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
          deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
          distinctio?</p>
      </li>
      <li class="list__item"><button class="list__item-delete-button">x</button>
        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
      </li>
      <li class="list__item"><button class="list__item-delete-button">x</button>
        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
      </li>
      <li class="list__item"><button class="list__item-delete-button">x</button>
        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
      </li>
      <li class="list__item"><button class="list__item-delete-button">x</button>
        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
      </li>
      <li class="list__item"><button class="list__item-delete-button">x</button>
        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
      </li>
      <li class="list__item"><button class="list__item-delete-button">x</button>
        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet
          onsectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
          deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
          distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt tempora
          esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
          nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
          deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
          distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt tempora
          esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
          nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
          blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
      </li>
    </ul>`)
  }

  renderList(notes) {
    this.container.innerHTML = ''

    notes.forEach(note => {
      const item = document.createElement('li')
      item.classList.add('list__item')

      const deleteButton = document.createElement('button')
      deleteButton.classList.add('list__item-delete-button')
      deleteButton.innerText = 'x'
      deleteButton.onclick = () => {
        this.onDeleteNote(note.id)
      }

      const text = document.createElement('p')
      text.contentEditable = true
      text.classList.add('list__item-text')
      text.onkeyup = () => {
        if (window.updateNoteTimeoutId)
            clearTimeout(window.updateNoteTimeoutId)

            window.updateNoteTimeoutId = setTimeout (() => {
              this.onUpdateNote(note.id,text.innerText)
            }, 500)
      }
      text.innerText = note.text

      item.append(deleteButton, text)

      this.container.append(item)
    })
  }

  onDeleteNote = null

  onUpdateNote = null
}