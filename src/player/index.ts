const PlayTmp = require("./index.art");

class Player {
  private nopPlayerPc: any;
  private player: any
  constructor(options) {
    const html = PlayTmp({
      title: "播放器",
    });
    const el: any = document.querySelector(options.container);
    el.innerHTML = html;
    this.init()
  }

  // 初始化
  private init() {
    this.nopPlayerPc = document.querySelector(".no-player-pc");

  }

}

export default Player;
