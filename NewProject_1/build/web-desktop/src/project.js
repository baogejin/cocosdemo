window.__require=function t(e,i,n){function c(s,h){if(!i[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var d="function"==typeof __require&&__require;if(!h&&d)return d(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+s+"'")}}var r=i[s]={exports:{}};e[s][0].call(r.exports,function(t){return c(e[s][1][t]||t)},r,r.exports,t,e,i,n)}return i[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<n.length;s++)c(n[s]);return c}({follow:[function(t,e,i){"use strict";cc._RF.push(e,"d43c8vd5TVKD6PLVITevGSJ","follow"),cc.Class({extends:cc.Component,properties:{hero0:{default:null,type:cc.Node},background:{default:null,type:cc.Node}},start:function(){},update:function(t){this.hero0.x+cc.visibleRect.width/2>=this.background.width/2?this.node.x=this.background.width/2-cc.visibleRect.width/2:this.hero0.x-cc.visibleRect.width/2<=-this.background.width/2?this.node.x=-this.background.width/2+cc.visibleRect.width/2:this.node.x=this.hero0.x,this.hero0.y+cc.visibleRect.height/2>=this.background.height/2?this.node.y=this.background.height/2-cc.visibleRect.height/2:this.hero0.y-cc.visibleRect.height/2<=-this.background.height/2?this.node.y=-this.background.height/2+cc.visibleRect.height/2:this.node.y=this.hero0.y}}),cc._RF.pop()},{}],game:[function(t,e,i){"use strict";cc._RF.push(e,"cfe57/0TahIHK0n5tWlIHQP","game"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],hero0:[function(t,e,i){"use strict";cc._RF.push(e,"9a888x1TwJMuZe0ktbdxcsv","hero0"),cc.Class({extends:cc.Component,properties:{speed:20,background:{default:null,type:cc.Node},upButton:{default:null,type:cc.Node},downButton:{default:null,type:cc.Node},leftButton:{default:null,type:cc.Node},rightButton:{default:null,type:cc.Node}},onLoad:function(){var t=this;this.directionData=["hero0-down","hero0-left","hero0-up","hero0-right"];var e=this.getComponent(cc.Animation);this.dirction=0,this.actLeft=!1,this.actUp=!1,this.actDown=!1,this.actRight=!1,this.move=!0,this.animSate=e.play("hero0-down"),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),this.upButton&&(this.upButton.on(cc.Node.EventType.TOUCH_START,function(e){t.actUp=!0},this),this.upButton.on(cc.Node.EventType.TOUCH_END,function(e){t.actUp=!1},this),this.upButton.on(cc.Node.EventType.TOUCH_CANCEL,function(e){t.actUp=!1},this)),this.downButton&&(this.downButton.on(cc.Node.EventType.TOUCH_START,function(e){t.actDown=!0},this),this.downButton.on(cc.Node.EventType.TOUCH_END,function(e){t.actDown=!1},this),this.downButton.on(cc.Node.EventType.TOUCH_CANCEL,function(e){t.actDown=!1},this)),this.leftButton&&(this.leftButton.on(cc.Node.EventType.TOUCH_START,function(e){t.actLeft=!0},this),this.leftButton.on(cc.Node.EventType.TOUCH_END,function(e){t.actLeft=!1},this),this.leftButton.on(cc.Node.EventType.TOUCH_CANCEL,function(e){t.actLeft=!1},this)),this.rightButton&&(this.rightButton.on(cc.Node.EventType.TOUCH_START,function(e){t.actRight=!0},this),this.rightButton.on(cc.Node.EventType.TOUCH_END,function(e){t.actRight=!1},this),this.rightButton.on(cc.Node.EventType.TOUCH_CANCEL,function(e){t.actRight=!1},this))},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},onKeyDown:function(){switch(event.keyCode){case cc.macro.KEY.a:this.actLeft=!0;break;case cc.macro.KEY.w:this.actUp=!0;break;case cc.macro.KEY.s:this.actDown=!0;break;case cc.macro.KEY.d:this.actRight=!0}},onKeyUp:function(){switch(event.keyCode){case cc.macro.KEY.a:this.actLeft=!1;break;case cc.macro.KEY.w:this.actUp=!1;break;case cc.macro.KEY.s:this.actDown=!1;break;case cc.macro.KEY.d:this.actRight=!1}},onBtnEvent:function(){},setDirection:function(t){if(this.dirction!=t){this.dirction=t;var e=this.getComponent(cc.Animation);this.animSate=e.play(this.directionData[t])}else if(0==this.move){(e=this.getComponent(cc.Animation)).resume()}this.move=!0},start:function(){},update:function(t){var e=-1;if(this.actDown?(e=0,this.node.y-this.speed>-(this.background.height/2-16)?this.node.y-=this.speed:this.node.y=-(this.background.height/2-16)):this.actUp?(e=2,this.node.y+this.speed<this.background.height/2-16?this.node.y+=this.speed:this.node.y=this.background.height/2-16):this.actLeft?(e=1,this.node.x-this.speed>-(this.background.width/2-16)?this.node.x-=this.speed:this.node.x=-(this.background.width/2-16)):this.actRight&&(e=3,this.node.x+this.speed<this.background.width/2-16?this.node.x+=this.speed:this.node.x=this.background.width/2-16),-1!=e)this.setDirection(e);else if(this.move){this.move=!1,this.getComponent(cc.Animation).pause()}}}),cc._RF.pop()},{}]},{},["follow","game","hero0"]);