class LoginPage extends NavigableForm {
  constructor() {
    super(`<main class="login-page container container--full container--spaced">
      <form class="form" method="get">
        <div class="form__field">
          <label for="email">Email</label>
          <input class="input" type="email" name="email" placeholder="email" id="email">
        </div>

        <div class="form__field">
          <label for="password">Password</label>
          <input class="input" type="password" name="password" placeholder="password" id="password">
        </div>

        <button class="button" type="submit">Login</button>
      
      </form>
  
      <a class="anchor" href="register.html">Register</a>

    </main>`)

  }

  onFormSubmit(callback) { // override
    const form = this.container.querySelector('form')

    form.onsubmit = function (event) {
      event.preventDefault()

      const email = form.email.value
      const password = form.password.value

      callback(email, password)
    }
  }
}