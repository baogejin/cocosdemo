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
        hero0: {
            default: null,
            type: cc.Node
        },
        background: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update(dt) {
        if (this.hero0.x + cc.visibleRect.width / 2 >= this.background.width / 2) {
            this.node.x = this.background.width / 2 - cc.visibleRect.width / 2
        } else if (this.hero0.x - cc.visibleRect.width / 2 <= -this.background.width / 2) {
            this.node.x = -this.background.width / 2 + cc.visibleRect.width / 2
        } else {
            this.node.x = this.hero0.x
        }
        if (this.hero0.y + cc.visibleRect.height / 2 >= this.background.height / 2) {
            this.node.y = this.background.height / 2 - cc.visibleRect.height / 2
        } else if (this.hero0.y - cc.visibleRect.height / 2 <= -this.background.height / 2) {
            this.node.y = -this.background.height / 2 + cc.visibleRect.height / 2
        } else {
            this.node.y = this.hero0.y
        }
    },
});
