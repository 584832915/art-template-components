const BeforeLoginTmp = require("./index.art");

class BeforeLogin {
  private content: any
  constructor(options) {
    this.content = document.querySelector(options.container)
    const html = BeforeLoginTmp({
      title: "引导页",
    });
    this.content.innerHTML = html;
    this.init();
  }

  // 初始化
  init() { }
  // 立即观看
  clickWatch() { }
}

export default BeforeLogin;
