class LoginPageObject {

  form;
  passwordInput;
  emailInput;

  constructor() {

    // get the container wrapper
    var container = element(by.id("login-container"));
    this.form = container.element(by.id('login-form'));
    this.passwordInput = container.element(by.id('login-password'));
    this.emailInput = container.element(by.id('login-email'));

  }

  setEmail(value: string) {
    return this.emailInput.clear().sendKeys(value);
  }

  setPassword(value: string) {
    return this.passwordInput.clear().sendKeys(value);
  }

  submitForm(){
    return this.form.sendKeys(protractor.Key.ENTER);
  }

}

module.exports = LoginPageObject;
