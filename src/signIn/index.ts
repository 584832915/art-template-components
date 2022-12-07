
import Modal from 'bootstrap/js/dist/modal'
import Alert from '../Alert'
const SingInTmp = require("./index.art");
class SingIn {
    private content: any
    private timer: any
    private myModal: any
    private alertDom: any
    constructor(options) {
        this.timer = null
        this.myModal = null
        const html = SingInTmp({});
        this.content = document.querySelector(options.container);
        this.content.innerHTML = html;
        this.init()
    }
    private init() {
        const staticBackdrop = this.content.querySelector(".signInModal")
        const signInBtn = this.content.querySelector('.signInBtn')
        const showSignIn = this.content.querySelector('.showSignIn')
        this.myModal = new Modal(staticBackdrop, {
            keyboard: false
        })


        showSignIn.addEventListener('click', () => {
            this.show()
        })
        this.alertDom = new Alert({ container: ".signInAlertWrapper" })
        signInBtn.addEventListener('click', () => {
            this.myModal.hide()
            this.alertDom.show("签到成功", 2000)
        })

    }
    // 签到弹窗打开
    public show() {
        this.myModal.show()
    }
    // 签到弹窗关闭
    public hide() {
        this.myModal.hide()
        if (this.timer) {
            window.clearInterval(this.timer)
            this.timer = null
        }
    }
}

export default SingIn;
