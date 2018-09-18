<template>
  <div class="three-container">
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  data () {
    return {
      renderer: {}
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted () {
    this.scene = new THREE.Scene() // 创建场景

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000) // 创建摄影机
    this.camera.position.z = 8
    // var renderer = new THREE.CanvasRenderer()     //几何级别的渲染，兼容性更好

    // var renderer = new THREE.WebGLRenderer()       //像素级的渲染，渲染效果更好
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight) // 设置画布大小
    this.renderer.setPixelRatio(window.devicePixelRatio) // 设置像素比，针对高清屏
    this.renderer.setClearColor('rgb(135,206,250)', 1.0)
    this.renderer.domElement.classList.add('canvas')
    let container = document.querySelector('.three-container')
    console.log(this.renderer.clearColor())
    container.appendChild(this.renderer.domElement)

    this.animate()
  },
  methods: {
    resizeHandler (e) {
      let target = e.target
      this.renderer.domElement.style.width = target.innerWidth + 'px'
      this.renderer.domElement.style.height = target.innerHeight + 'px'
    },
    animate () {
      requestAnimationFrame(this.animate)

      // this.cube.rotation.x += 0.01
      // this.cube.rotation.y += 0.01

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style lang="stylus">
.three-container{
}
</style>
