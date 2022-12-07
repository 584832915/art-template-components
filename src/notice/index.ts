const NoticeTmp = require("./index.art");

interface Options {
  container: string;
}

class Notice {
  constructor(options: Options) {
    const html = NoticeTmp({
      title: "【公告】这是一个公告",
    });
    const el: any = document.querySelector(options.container);
    el.innerHTML = html;
  }
}

export default Notice;
