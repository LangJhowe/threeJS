<template>
  <div class="fish-game-container" ref="container">
    <div class="canvas-wrap">
      <canvas id="canvas1" ref="can1"></canvas>
      <canvas id="canvas2" ref="can2"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      can1: {}, // canvas1
      can2: {}, // //canvas2

      ctx1: {}, // 背景1
      ctx2: {}, // 背景2

      canWidth: 0,
      canHeight: 0

    }
  },
  beforeMounted () {
  },
  mounted () {
    this.bgPic = new Image()
    this.init()
    this.gameloop()
  },
  methods: {
    init () {
      this.can1 = this.$refs.can1// fishes,dust,UI,cricle
      this.ctx1 = this.can1.getContext('2d')
      this.can2 = this.$refs.can2// background,ane,fruits
      this.ctx2 = this.can2.getContext('2d')

      this.bgPic.src = '/static/GameFishImg/src/background.jpg'

      this.canWidth = this.can1.width
      this.canHeight = this.can1.height
    },
    gameloop () {
      // 帧数循环,与setTimeOut,setInterval更科学
      // 原理，当前帧绘制完后，根据机器性能来确定间隔时间绘制下一帧
      // setTimeOut,setInterval 定时时间,如果不能在时间内绘制完成，会很麻烦
      // fps(frame per second)帧数不固定
      window.requestAnimationFrame(this.gameloop) // 有兼容问题
      this.drawBackground()
    },
    drawBackground () {
      this.ctx2.drawImage(this.bgPic, 0, 0, this.canWidth, this.canHeight)
    }
  }
}
</script>

<style lang="stylus" scoped>
.fish-game-container{
  padding-top 20px
  position relative
  .canvas-wrap{
    margin 0 auto
    width 800px
    height 600px
    position relative
  }
  #canvas1,#canvas2{
    width 800px
    height 600px
    // background grey
    position absolute
    top 20
    left 0
  }
  #canvas1{
    z-index 1
  }
  #canvas2{
    z-index 0
  }
}
</style>
