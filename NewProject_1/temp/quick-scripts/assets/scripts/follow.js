(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/follow.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd43c8vd5TVKD6PLVITevGSJ', 'follow', __filename);
// scripts/follow.js

"use strict";

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

    start: function start() {},
    update: function update(dt) {
        if (this.hero0.x + cc.visibleRect.width / 2 >= this.background.width / 2) {
            this.node.x = this.background.width / 2 - cc.visibleRect.width / 2;
        } else if (this.hero0.x - cc.visibleRect.width / 2 <= -this.background.width / 2) {
            this.node.x = -this.background.width / 2 + cc.visibleRect.width / 2;
        } else {
            this.node.x = this.hero0.x;
        }
        if (this.hero0.y + cc.visibleRect.height / 2 >= this.background.height / 2) {
            this.node.y = this.background.height / 2 - cc.visibleRect.height / 2;
        } else if (this.hero0.y - cc.visibleRect.height / 2 <= -this.background.height / 2) {
            this.node.y = -this.background.height / 2 + cc.visibleRect.height / 2;
        } else {
            this.node.y = this.hero0.y;
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=follow.js.map
        