window.__require=function t(e,i,s){function n(o,a){if(!i[o]){if(!e[o]){var c=o.split("/");if(c=c[c.length-1],!e[c]){var h="function"==typeof __require&&__require;if(!a&&h)return h(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+o+"'")}}var u=i[o]={exports:{}};e[o][0].call(u.exports,function(t){return n(e[o][1][t]||t)},u,u.exports,t,e,i,s)}return i[o].exports}for(var r="function"==typeof __require&&__require,o=0;o<s.length;o++)n(s[o]);return n}({game:[function(t,e,i){"use strict";cc._RF.push(e,"2d9deK98xBEYIbmF/j7qjcS","game"),cc.Class({extends:cc.Component,properties:{grids:new Array,gridPrefab:{default:null,type:cc.Prefab},dd:{default:null,type:cc.Label},canvas:{default:null,type:cc.Node}},onLoad:function(){this.v=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var t=0;t<16;t++){var e=Math.floor(t/4),i=t%4,s=cc.instantiate(this.gridPrefab);s.x=100*e-150,s.y=100*i-150,s.getComponent("grid").setValue(this.v[e][i]),this.node.addChild(s),this.grids[t]=s}this.flag=!0,this.onMove("left"),this.canvas.on(cc.Node.EventType.TOUCH_START,function(t){var e=t.getTouches()[0].getLocation();this.tx=e.x,this.ty=e.y},this),this.canvas.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this)},onTouchEnd:function(t){var e=t.getTouches()[0].getLocation(),i=e.x-this.tx,s=e.y-this.ty;this.flag=!1,Math.abs(i)>Math.abs(s)?i>0?this.onMove("right"):this.onMove("left"):s>0?this.onMove("up"):this.onMove("down")},onMove:function(t){switch(t){case"up":for(var e=0;e<4;e++)this.calculate(e,3,0,-1);break;case"down":for(e=0;e<4;e++)this.calculate(e,0,0,1);break;case"left":for(e=0;e<4;e++)this.calculate(0,e,1,0);break;case"right":for(e=0;e<4;e++)this.calculate(3,e,-1,0)}if(this.flag){var i=0;for(e=0;e<4;e++)for(var s=0;s<4;s++)0==this.v[e][s]&&i++,this.grids[4*e+s].getComponent("grid").setValue(this.v[e][s]);var n=parseInt(1234567*Math.random())%i;for(e=0;e<4&&!(n<0);e++)for(s=0;s<4;s++)0==this.v[e][s]&&(0==n&&(this.v[e][s]=2,this.grids[4*e+s].getComponent("grid").setValue(this.v[e][s])),n--)}},calculate:function(t,e,i,s){if(!(t<0||t>=4||e<0||e>=4)){for(var n=1;n<4&&!(t+i*n<0||t+i*n>=4||e+s*n<0||e+s*n>=4);n++)if(0==this.v[t][e]&&0!=this.v[t+i*n][e+s*n])this.v[t][e]=this.v[t+i*n][e+s*n],this.v[t+i*n][e+s*n]=0,this.flag=!0;else if(this.v[t][e]==this.v[t+i*n][e+s*n]&&0!=this.v[t][e])this.v[t][e]+=this.v[t+i*n][e+s*n],this.v[t+i*n][e+s*n]=0,this.flag=!0;else if(0!=this.v[t+i*n][e+s*n])break;this.calculate(t+i,e+s,i,s)}},start:function(){}}),cc._RF.pop()},{}],grid:[function(t,e,i){"use strict";cc._RF.push(e,"94c495OuPRD14shs3Rj+J23","grid"),cc.Class({extends:cc.Component,properties:{numTip:{default:null,type:cc.Label},gridbc:{default:null,type:cc.Node},value:0},setValue:function(t){this.value=t,this.numTip.string=t,this.gridbc.opacity=0==t?0:255},start:function(){}}),cc._RF.pop()},{}]},{},["game","grid"]);