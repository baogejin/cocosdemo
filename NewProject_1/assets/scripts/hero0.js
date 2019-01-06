// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 20,
        background: {
            default: null,
            type: cc.Node
        },
        upButton: {
            default: null,
            type: cc.Node
        },

        downButton: {
            default: null,
            type: cc.Node
        },

        leftButton: {
            default: null,
            type: cc.Node
        },

        rightButton: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.directionData = ["hero0-down", "hero0-left", "hero0-up", "hero0-right"]
        var anim = this.getComponent(cc.Animation);
        this.dirction = 0
        this.actLeft = false
        this.actUp = false
        this.actDown = false
        this.actRight = false
        this.move = true
        this.animSate = anim.play('hero0-down')
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        if (this.upButton) {
            this.upButton.on(cc.Node.EventType.TOUCH_START, event => {
                this.actUp = true
            }, this);
            this.upButton.on(cc.Node.EventType.TOUCH_END, event => {
                this.actUp = false
            }, this);
            this.upButton.on(cc.Node.EventType.TOUCH_CANCEL, event => {
                this.actUp = false
            }, this);
        }

        if (this.downButton) {
            this.downButton.on(cc.Node.EventType.TOUCH_START, event => {
                this.actDown = true
            }, this);
            this.downButton.on(cc.Node.EventType.TOUCH_END, event => {
                this.actDown = false
            }, this);
            this.downButton.on(cc.Node.EventType.TOUCH_CANCEL, event => {
                this.actDown = false
            }, this);
        }

        if (this.leftButton) {
            this.leftButton.on(cc.Node.EventType.TOUCH_START, event => {
                this.actLeft = true
            }, this);
            this.leftButton.on(cc.Node.EventType.TOUCH_END, event => {
                this.actLeft = false
            }, this);
            this.leftButton.on(cc.Node.EventType.TOUCH_CANCEL, event => {
                this.actLeft = false
            }, this);
        }

        if (this.rightButton) {
            this.rightButton.on(cc.Node.EventType.TOUCH_START, event => {
                this.actRight = true
            }, this);
            this.rightButton.on(cc.Node.EventType.TOUCH_END, event => {
                this.actRight = false
            }, this);
            this.rightButton.on(cc.Node.EventType.TOUCH_CANCEL, event => {
                this.actRight = false
            }, this);
        }
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyDown() {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.actLeft = true
                break
            case cc.macro.KEY.w:
                this.actUp = true
                break
            case cc.macro.KEY.s:
                this.actDown = true
                break
            case cc.macro.KEY.d:
                this.actRight = true
                break
            default:
                break
        }
    },
    onKeyUp() {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.actLeft = false
                break
            case cc.macro.KEY.w:
                this.actUp = false
                break
            case cc.macro.KEY.s:
                this.actDown = false
                break
            case cc.macro.KEY.d:
                this.actRight = false
                break
            default:
                break
        }
    },
    onBtnEvent(){

    },

    setDirection(d) {
        if (this.dirction != d) {
            this.dirction = d
            var anim = this.getComponent(cc.Animation);
            this.animSate = anim.play(this.directionData[d])
        } else if (this.move == false) {
            var anim = this.getComponent(cc.Animation);
            anim.resume()
        }
        this.move = true
    },
    start() {

    },

    update(dt) {

        var d = -1
        if (this.actDown) {
            d = 0
            if (this.node.y - this.speed > -(this.background.height / 2 - 32 / 2)) {
                this.node.y -= this.speed
            } else {
                this.node.y = -(this.background.height / 2 - 32 / 2)
            }
        } else if (this.actUp) {
            d = 2
            if (this.node.y + this.speed < this.background.height / 2 - 32 / 2) {
                this.node.y += this.speed
            } else {
                this.node.y = this.background.height / 2 - 32 / 2
            }
        } else if (this.actLeft) {
            d = 1
            if (this.node.x - this.speed > -(this.background.width / 2 - 32 / 2)) {
                this.node.x -= this.speed
            } else {
                this.node.x = -(this.background.width / 2 - 32 / 2)
            }
        } else if (this.actRight) {
            d = 3
            if (this.node.x + this.speed < this.background.width / 2 - 32 / 2) {
                this.node.x += this.speed
            } else {
                this.node.x = this.background.width / 2 - 32 / 2
            }
        }
        if (d != -1) {
            this.setDirection(d)
        } else if (this.move) {
            this.move = false
            var anim = this.getComponent(cc.Animation);
            anim.pause()
        }

    },
});
