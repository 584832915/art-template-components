
import Modal from 'bootstrap/js/dist/modal'
const AlertTmp = require("./index.art");
class Alert {
    private content: any
    private myModal: any
    private timeout: any
    constructor(options) {
        this.timeout = null
        const html = AlertTmp();
        this.content = document.querySelector(options.container);
        this.content.innerHTML = html;
        this.init()
    }
    private init() {
        const alertModalDom = this.content.querySelector(".alertModal")
        this.myModal = new Modal(alertModalDom, {
            keyboard: false
        })
    }
    public show(content, duration) {
        const alertContentDom = this.content.querySelector('.alertContent')
        alertContentDom.innerHTML = content || '成功'
        this.myModal.show()
        if (duration) {
            this.timeout = window.setTimeout(() => {
                this.myModal.hide()
                window.clearTimeout(this.timeout)
                this.timeout = null
            }, duration)
        }
    }
    public hide() {
        this.myModal.hide()
    }
}

export default Alert;
