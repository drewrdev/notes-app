class RegisterPage extends NavigableForm {
  constructor() {
    super(`<main class="register-page container container--full container--spaced">
      <form class="form">
        <div class="form__field">
          <label for="name">Name</label>
          <input class="input" type="text" name="name" placeholder="name" id="name">
        </div>

        <div class="form__field">
          <label for="email">Email</label>
          <input class="input" type="email" name="email" placeholder="email" id="email">
        </div>

        <div class="form__field">
          <label for="password">Password</label>
          <input class="input" type="password" name="password" placeholder="password" id="password">
        </div>

        <button class="button" type="submit">Register</button> 

      </form>
    
      <a class="anchor" href="login.html">Login</a>

    </main>`)
  }

  onFormSubmit(callback) { //override
    const form = this.container.querySelector('form')

    form.onsubmit = function (event) {
      event.preventDefault()

      const name = form.name.value
      const email = form.email.value
      const password = form.password.value

      callback(name, email, password)
    }
  }
}