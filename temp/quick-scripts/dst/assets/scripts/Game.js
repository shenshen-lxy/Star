
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwib25Mb2FkIiwiZ3JvdW5kWSIsInkiLCJoZWlnaHQiLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsInRpbWVyIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwic3RhcnREdXJhdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJyYW5kWCIsInYyIiwiZ2FpblNjb3JlIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiLCJnYW1lT3ZlciIsInN0b3BBbGxBY3Rpb25zIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBQztBQUNSLGlCQUFRLElBREE7QUFFUkMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkEsS0FGSDtBQU1UO0FBQ0FDLElBQUFBLGVBQWUsRUFBQyxDQVBQO0FBUVRDLElBQUFBLGVBQWUsRUFBQyxDQVJQO0FBU1Q7QUFDQUMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVISixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1U7QUFGTCxLQVZFO0FBY1Q7QUFDQUMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVITixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1U7QUFGTCxLQWZFO0FBbUJURSxJQUFBQSxZQUFZLEVBQUM7QUFDVCxpQkFBUyxJQURBO0FBRVRQLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDYTtBQUZDO0FBbkJKLEdBSFA7QUE0Qkw7QUFFQUMsRUFBQUEsTUE5Qkssb0JBOEJLO0FBQ047QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS04sTUFBTCxDQUFZTyxDQUFaLEdBQWUsS0FBS1AsTUFBTCxDQUFZUSxNQUFaLEdBQW1CLENBQWpELENBRk0sQ0FFOEM7QUFDcEQ7O0FBQ0EsU0FBS0MsWUFBTCxHQUpNLENBS047O0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FOTSxDQU9OOztBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0F2Q0k7QUF5Q0xGLEVBQUFBLFlBekNLLDBCQXlDUztBQUNWLFFBQUlHLE9BQU8sR0FBR3JCLEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZSxLQUFLbEIsVUFBcEIsQ0FBZDtBQUNBLFNBQUttQixJQUFMLENBQVVDLFFBQVYsQ0FBbUJILE9BQW5CO0FBQ0FBLElBQUFBLE9BQU8sQ0FBQ0ksV0FBUixDQUFvQixLQUFLQyxrQkFBTCxFQUFwQjtBQUVBTCxJQUFBQSxPQUFPLENBQUNNLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQTdCLEdBQW9DLElBQXBDO0FBRUEsU0FBS0MsYUFBTCxHQUFxQixLQUFLckIsZUFBTCxHQUF1QnNCLElBQUksQ0FBQ0MsTUFBTCxNQUFpQixLQUFLeEIsZUFBTCxHQUF1QixLQUFLQyxlQUE3QyxDQUE1QztBQUNBLFNBQUtZLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0FsREk7QUFvRExNLEVBQUFBLGtCQXBESyxnQ0FvRGU7QUFDaEIsUUFBSU0sS0FBSyxHQUFHLEtBQUtqQixPQUFMLEdBQWVlLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFLcEIsTUFBTCxDQUFZZ0IsWUFBWixDQUF5QixRQUF6QixFQUFtQ00sVUFBbEUsR0FBOEUsRUFBMUY7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVWSxLQUFWLEdBQWlCLENBQTVCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQUNOLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUFzQixDQUF0QixHQUF3QkcsSUFBcEM7QUFDQSxXQUFPbEMsRUFBRSxDQUFDcUMsRUFBSCxDQUFNRCxLQUFOLEVBQVlKLEtBQVosQ0FBUDtBQUNILEdBekRJO0FBMkRMTSxFQUFBQSxTQTNESyx1QkEyRE07QUFDUCxTQUFLbkIsS0FBTCxJQUFhLENBQWI7QUFDQSxTQUFLUCxZQUFMLENBQWtCMkIsTUFBbEIsR0FBMkIsV0FBUyxLQUFLcEIsS0FBekM7QUFDSCxHQTlESTtBQWdFTDtBQUVBO0FBRUFxQixFQUFBQSxNQXBFSyxrQkFvRUdDLEVBcEVILEVBb0VPO0FBQ1IsUUFBRyxLQUFLckIsS0FBTCxHQUFhLEtBQUtTLGFBQXJCLEVBQW1DO0FBQy9CLFdBQUthLFFBQUw7QUFDQTtBQUNIOztBQUNELFNBQUt0QixLQUFMLElBQWNxQixFQUFkO0FBQ0gsR0ExRUk7QUE0RUxDLEVBQUFBLFFBNUVLLHNCQTRFSztBQUNOLFNBQUsvQixNQUFMLENBQVlnQyxjQUFaO0FBQ0EzQyxJQUFBQSxFQUFFLENBQUM0QyxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDtBQS9FSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/ov5nkuKrlsZ7mgKflvJXnlKjkuobmmJ/mmJ/pooTnva7otYTmupAgICAgXHJcbiAgICAgICAgc3RhclByZWZhYjp7XHJcbiAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgIHR5cGU6Y2MuUHJlZmFiXHJcbiAgICAgICB9LFxyXG4gICAgICAgLy/mmJ/mmJ/kuqfnlJ/lkI7mtojlpLHml7bpl7TnmoTpmo/mnLrojIPlm7RcclxuICAgICAgIG1heFN0YXJEdXJhdGlvbjowLFxyXG4gICAgICAgbWluU3RhckR1cmF0aW9uOjAsXHJcbiAgICAgICAvL+WcsOmdouiKgueCue+8jOeUqOS6juehruWumuaYn+aYn+eUn+aIkOeahOmrmOW6plxyXG4gICAgICAgZ3JvdW5kOntcclxuICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICB9LFxyXG4gICAgICAgLy9wbGF5ZXLoioLngrnvvIznlKjkuo7ojrflj5bkuLvop5LlvLnot7PnmoTpq5jluqbvvIzlkozmjqfliLbkuLvop5LnmoTlvIDlhbNcclxuICAgICAgIHBsYXllcjp7XHJcbiAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgfSxcclxuICAgICAgIHNjb3JlRGlzcGxheTp7XHJcbiAgICAgICAgICAgZGVmYXVsdCA6bnVsbCxcclxuICAgICAgICAgICB0eXBlOmNjLkxhYmVsXHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy/ojrflj5blnLDlubPpnaLnmoR56L205Z2Q5qCHXHJcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArdGhpcy5ncm91bmQuaGVpZ2h0LzI7IC8v6ZSa54K55Zyo5Zyw5p2/5Lit5b+D77yM5omA5Lul6KaB5oqK5LqM5YiG5LmL5LiA6KGl5LiKXHJcbiAgICAgICAgLy/nlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cclxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW6K6h5YiGXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgLy/orqHml7blmago5pif5pif5raI5aSxKVxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBzcGF3bk5ld1N0YXIoKXtcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xyXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KFwiU3RhclwiKS5nYW1lID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydER1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb24oKXtcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyXCIpLmp1bXBIZWlnaHQgKzUwO1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8yO1xyXG4gICAgICAgIHZhciByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSoyKm1heFg7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLHJhbmRZKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FpblNjb3JlKCl7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPTE7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gXCJTY29yZTpcIit0aGlzLnNjb3JlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLnRpbWVyID4gdGhpcy5zdGFydER1cmF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVPdmVyKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==