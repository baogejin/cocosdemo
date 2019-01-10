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
        grids: new Array,
        gridPrefab: {
            default: null,
            type: cc.Prefab
        },
        dd: {
            default: null,
            type: cc.Label
        },
        canvas: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.v = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        for (var i = 0; i < 16; i++) {
            var m = Math.floor(i / 4)
            var n = i % 4
            var grid = cc.instantiate(this.gridPrefab)
            grid.x = -150 + m * 100
            grid.y = -150 + n * 100
            grid.getComponent('grid').setValue(this.v[m][n])
            this.node.addChild(grid)
            this.grids[i] = grid
        }
        this.flag = true
        this.onMove("left")
        this.canvas.on(cc.Node.EventType.TOUCH_START, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            this.tx = touchLoc.x
            this.ty = touchLoc.y
        }, this)
        this.canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
    },

    onTouchEnd(event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        var dx = touchLoc.x - this.tx
        var dy = touchLoc.y - this.ty
        this.flag = false
        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0) {
                this.onMove("right")
            } else {
                this.onMove("left")
            }

        } else {
            if (dy > 0) {
                this.onMove("up")
            } else {
                this.onMove("down")
            }
        }
    },

    onMove(direction) {
        switch (direction) {
            case "up":
                for (var i = 0; i < 4; i++) {
                    this.calculate(i, 3, 0, -1)
                }
                break
            case "down":
                for (var i = 0; i < 4; i++) {
                    this.calculate(i, 0, 0, 1)
                }
                break
            case "left":
                for (var i = 0; i < 4; i++) {
                    this.calculate(0, i, 1, 0)
                }
                break
            case "right":
                for (var i = 0; i < 4; i++) {
                    this.calculate(3, i, -1, 0)
                }
                break
            default:
                break
        }
        if (!this.flag) {
            return
        }
        var cnt = 0
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.v[i][j] == 0) {
                    cnt++
                }
                this.grids[i * 4 + j].getComponent('grid').setValue(this.v[i][j])
            }
        }
        var rand = parseInt(Math.random() * 1234567) % cnt
        for (var i = 0; i < 4; i++) {
            if (rand < 0) {
                break
            }
            for (var j = 0; j < 4; j++) {
                if (this.v[i][j] == 0) {
                    if (rand == 0) {
                        this.v[i][j] = 2
                        this.grids[i * 4 + j].getComponent('grid').setValue(this.v[i][j])
                    }
                    rand--
                }

            }
        }

    },

    calculate(m, n, dx, dy) {
        if (m < 0 || m >= 4 || n < 0 || n >= 4) {
            return
        }
        for (var i = 1; i < 4; i++) {
            if (m + dx * i < 0 || m + dx * i >= 4 || n + dy * i < 0 || n + dy * i >= 4) {
                break
            }
            if (this.v[m][n] == 0 && this.v[m + dx * i][n + dy * i] != 0) {
                this.v[m][n] = this.v[m + dx * i][n + dy * i]
                this.v[m + dx * i][n + dy * i] = 0
                this.flag = true
            } else if (this.v[m][n] == this.v[m + dx * i][n + dy * i] && this.v[m][n] != 0) {
                this.v[m][n] += this.v[m + dx * i][n + dy * i]
                this.v[m + dx * i][n + dy * i] = 0
                this.flag = true
            } else if (this.v[m + dx * i][n + dy * i] != 0) {
                break
            }
        }
        this.calculate(m + dx, n + dy, dx, dy)
    },

    start() {

    },

    // update (dt) {},
});
