"use strict";
cc._RF.push(module, 'd26e3XQ2JVBpIaWB3NPQeAj', 'Game');
// scripts/Game.js

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
    //这个属性引用了星星预置资源    
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    //星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    //地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    //player节点，用于获取主角弹跳的高度，和控制主角的开关
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //获取地平面的y轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; //锚点在地板中心，所以要把二分之一补上
    //生成一个新的星星

    this.spawnNewStar(); //初始化计分

    this.score = 0; //计时器(星星消失)

    this.timer = 0;
  },
  spawnNewStar: function spawnNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent("Star").game = this;
    this.startDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randY = this.groundY + Math.random() * this.player.getComponent("Player").jumpHeight + 50;
    var maxX = this.node.width / 2;
    var randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },
  gainScore: function gainScore() {
    this.score += 1;
    this.scoreDisplay.string = "Score:" + this.score;
  },
  // start () {
  // },
  update: function update(dt) {
    if (this.timer > this.startDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gameOver: function gameOver() {
    this.player.stopAllActions();
    cc.director.loadScene("game");
  }
});

cc._RF.pop();