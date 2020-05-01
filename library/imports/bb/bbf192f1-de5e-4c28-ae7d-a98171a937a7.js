"use strict";
cc._RF.push(module, 'bbf19Lx3l5MKK59qYFxqTen', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    //星星和主角之间的距离小于这个数值时，就会完成收集
    pickRadius: 0
  },
  getSubDistance: function getSubDistance() {
    var playerPos = this.game.player.getPosition(); //玩家位置

    var dist = this.node.getPosition().sub(playerPos).mag(); //玩家位置和星星的差值

    return dist;
  },
  OnPicked: function OnPicked() {
    this.game.spawnNewStar();
    this.game.gainScore();
    this.node.destroy();
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    if (this.getSubDistance() < this.pickRadius) {
      this.OnPicked();
      return;
    }
  }
});

cc._RF.pop();