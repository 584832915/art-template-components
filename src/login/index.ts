const LoginTmp = require("./index.art");

class Login {
  private content: any
  private dialogLoginInput: any
  constructor(options) {
    this.content = document.querySelector(options.container);
    this.dialogLoginInput = null
    const html = LoginTmp({
      title: "",
    });
    this.content.innerHTML = html;
    this.init();
  }

  // 初始化
  private init() {
    this.dialogLoginInput = this.content.querySelector(".dialog-login-input");
    this.watchPassword() // 查看密码
    this.changeInput() // 监听按钮的变化
  }

  // 查看密码
  private watchPassword() {
    const eyeView = this.content.querySelector(".icon-view");

    eyeView.addEventListener('click', () => {
      let inputType = this.dialogLoginInput?.getAttribute('type') === 'text' ? 'password' : 'text';
      this.dialogLoginInput?.setAttribute('type', inputType)
    })
  }

  // 监听按钮的变化
  private changeInput() {
    const dialogLoginBtn = this.content.querySelector(".dialog-login-btn");
    this.dialogLoginInput.addEventListener('input', () => {
      let bgColor = this.dialogLoginInput.value.length > 0 ? '#3986EE' : 'rgba(0, 0, 0, 0.3)';
      dialogLoginBtn?.setAttribute('style', 'background-color:' + bgColor);
    })
    dialogLoginBtn.addEventListener('click', () => {
      this.loginFromPassword()
    })
  }

  // 密码登录
  private loginFromPassword() {
    let password = this.dialogLoginInput.value
  }
}

export default Login;
