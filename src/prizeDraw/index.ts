
import Modal from 'bootstrap/js/dist/modal'
const prizeTmp = require("./index.art");
class PrizeDraw {
    private content: any
    private myModal: any
    private lottory: any
    private timer: any
    constructor(options) {
        // this.lottory = FineSdk.useLottory(options.sdk)
        this.timer = null
        const html = prizeTmp();
        this.content = document.querySelector(options.container);
        this.content.innerHTML = html;
        this.init(options.sdk)
    }
    private init(sdk) {
        const prizeModalDom = this.content.querySelector(".prizeModal")
        const showPrize = this.content.querySelector('.showPrize')
        this.myModal = new Modal(prizeModalDom, {
            keyboard: false
        })
        showPrize.addEventListener('click', () => {
            this.show()
            this.timer = window.setTimeout(() => {
                this.myModal.hide()
                window.clearTimeout(this.timer)
                this.timer = null
            }, 2000)
        })
    }
    private lottryEnd(e) {
        this.myModal.show()
        let myUid = sessionStorage.getItem('finesdk-userId')
        console.log(e, "抽奖结束")
        this.timer = window.setTimeout(() => {
            this.myModal.hide()
            window.clearTimeout(this.timer)
            this.timer = null
        }, 2000)
    }
    public show() {
        this.myModal.show()
    }
    public hide() {
        this.myModal.hide()
    }
}

export default PrizeDraw;
