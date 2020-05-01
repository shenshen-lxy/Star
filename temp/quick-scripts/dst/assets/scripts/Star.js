
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRTdWJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwic3ViIiwibWFnIiwiT25QaWNrZWQiLCJzcGF3bk5ld1N0YXIiLCJnYWluU2NvcmUiLCJkZXN0cm95Iiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFDO0FBRkgsR0FIUDtBQVFMQyxFQUFBQSxjQVJLLDRCQVFXO0FBQ1osUUFBSUMsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEIsQ0FEWSxDQUNtQzs7QUFDL0MsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUYsV0FBVixHQUF3QkcsR0FBeEIsQ0FBNEJOLFNBQTVCLEVBQXVDTyxHQUF2QyxFQUFYLENBRlksQ0FFNEM7O0FBQ3hELFdBQU9ILElBQVA7QUFDSCxHQVpJO0FBY0xJLEVBQUFBLFFBZEssc0JBY0s7QUFDUCxTQUFLUCxJQUFMLENBQVVRLFlBQVY7QUFDQSxTQUFLUixJQUFMLENBQVVTLFNBQVY7QUFDQSxTQUFLTCxJQUFMLENBQVVNLE9BQVY7QUFDRixHQWxCSTtBQW9CTDtBQUVBO0FBRUFDLEVBQUFBLEtBeEJLLG1CQXdCSSxDQUVSLENBMUJJO0FBNEJMQyxFQUFBQSxNQTVCSyxrQkE0QkdDLEVBNUJILEVBNEJPO0FBQ1IsUUFBRyxLQUFLZixjQUFMLEtBQXNCLEtBQUtELFVBQTlCLEVBQXlDO0FBQ3JDLFdBQUtVLFFBQUw7QUFDQTtBQUNIO0FBQ0o7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8v5pif5pif5ZKM5Li76KeS5LmL6Ze055qE6Led56a75bCP5LqO6L+Z5Liq5pWw5YC85pe277yM5bCx5Lya5a6M5oiQ5pS26ZuGXHJcbiAgICAgICAgcGlja1JhZGl1czowLFxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTdWJEaXN0YW5jZSgpe1xyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7Ly/njqnlrrbkvY3nva5cclxuICAgICAgICB2YXIgZGlzdCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnN1YihwbGF5ZXJQb3MpLm1hZygpOy8v546p5a625L2N572u5ZKM5pif5pif55qE5beu5YC8XHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9LFxyXG5cclxuICAgIE9uUGlja2VkKCl7XHJcbiAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyICgpO1xyXG4gICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG4gICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmdldFN1YkRpc3RhbmNlKCk8dGhpcy5waWNrUmFkaXVzKXtcclxuICAgICAgICAgICAgdGhpcy5PblBpY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==