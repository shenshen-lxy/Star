
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3615fysz0JF1omzmRVG8Vek', 'Player');
// scripts/Player.js

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
    //主角跳跃高度(px)
    jumpHeight: 0,
    //主角跳跃持续时间(s)
    jumpDuration: 0,
    //最大移动速度(px/s)
    maxMoveSpeed: 0,
    //加速度(px/s^2)
    accel: 0
  },
  setJumpAction: function setJumpAction() {
    //跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); //下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); //不断重复

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //初始化跳跃动作
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); //加速度方向开关

    this.accLeft = false;
    this.accRight = false; //主角当前水平方向速度

    this.xSpeed = 0; //初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    //取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    //根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } //限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } //根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwic2V0SnVtcEFjdGlvbiIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwib25Mb2FkIiwianVtcEFjdGlvbiIsIm5vZGUiLCJydW5BY3Rpb24iLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsIm9uRGVzdHJveSIsIm9mZiIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFDLENBRkg7QUFHUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUMsQ0FKTDtBQUtSO0FBQ0FDLElBQUFBLFlBQVksRUFBQyxDQU5MO0FBT1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFDO0FBUkUsR0FIUDtBQWNMQyxFQUFBQSxhQUFhLEVBQUMseUJBQVU7QUFDcEI7QUFDQSxRQUFJQyxNQUFNLEdBQUdULEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLEtBQUtMLFlBQWYsRUFBNEJMLEVB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QyxFQUEzQjtBQUNILEtBRkQsTUFFTSxJQUFHLEtBQUtqQixRQUFSLEVBQWlCO0FBQ25CLFdBQUtNLE1BQUwsSUFBYyxLQUFLekIsS0FBTCxHQUFhb0MsRUFBM0I7QUFDSCxLQU5PLENBUVI7OztBQUNBLFFBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtiLE1BQWQsSUFBd0IsS0FBSzFCLFlBQWhDLEVBQTZDO0FBQ3pDLFdBQUswQixNQUFMLEdBQWMsS0FBSzFCLFlBQUwsR0FBb0IsS0FBSzBCLE1BQXpCLEdBQWtDWSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLYixNQUFkLENBQWhEO0FBQ0gsS0FYTyxDQWFSOzs7QUFDQSxTQUFLRixJQUFMLENBQVVnQixDQUFWLElBQWUsS0FBS2QsTUFBTCxHQUFjVyxFQUE3QjtBQUNIO0FBekZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL+S4u+inkui3s+i3g+mrmOW6pihweClcclxuICAgICAgICBqdW1wSGVpZ2h0OjAsXHJcbiAgICAgICAgLy/kuLvop5Lot7Pot4PmjIHnu63ml7bpl7QocylcclxuICAgICAgICBqdW1wRHVyYXRpb246MCxcclxuICAgICAgICAvL+acgOWkp+enu+WKqOmAn+W6pihweC9zKVxyXG4gICAgICAgIG1heE1vdmVTcGVlZDowLFxyXG4gICAgICAgIC8v5Yqg6YCf5bqmKHB4L3NeMilcclxuICAgICAgICBhY2NlbDowLFxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRKdW1wQWN0aW9uOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/ot7Pot4PkuIrljYdcclxuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLGNjLnYyKDAsdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgICAgICAvL+S4i+iQvVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLC10aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XHJcbiAgICAgICAgLy/kuI3mlq3ph43lpI1cclxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsanVtcERvd24pKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlVcChldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WIneWni+WMlui3s+i3g+WKqOS9nFxyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy/liqDpgJ/luqbmlrnlkJHlvIDlhbNcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMlumUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMub25LZXlVcCx0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpe1xyXG4gICAgICAgIC8v5Y+W5raI6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLm9uS2V5RG93bix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8v5qC55o2u5b2T5YmN5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXHJcbiAgICAgICAgaWYodGhpcy5hY2NMZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT10aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hY2NSaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9dGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/pmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCl7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=