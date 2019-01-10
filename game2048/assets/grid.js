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
        numTip: {
            default: null,
            type: cc.Label
        },
        gridbc: {
            default: null,
            type: cc.Node
        },
        value: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    setValue(v) {
        this.value = v
        this.numTip.string = v
        if (v == 0) {
            this.gridbc.opacity = 0
        } else {
            this.gridbc.opacity = 255
        }
    },

    start() {

    },

    // update (dt) {},
});
