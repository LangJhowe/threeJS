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
    // this.renderer.setClearColor('rgba(135,206,250,0.5)', 1.0)

    // this.renderer.setClearColor(0xffffff, 1.0) // 设置默认背景色
    // this.renderer.setClearColor(0x000000, 1.0)
    this.renderer.domElement.classList.add('canvas')
    let container = document.querySelector('.three-container')
    console.log(this.renderer.clearColor())
    container.appendChild(this.renderer.domElement)

    // ======================================
    // this.scene = new THREE.Scene()
    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // this.renderer = new THREE.WebGLRenderer()
    // this.renderer.setSize(window.innerWidth, window.innerHeight)

    // // this.renderer.setClearColor(0xffffff, 1.0)
    // // this.renderer.setClearColor('#428bca', 1.0)
    // // this.renderer.setClearColor('rgba(135,206,250,0.5)', 1.0)

    // document.body.appendChild(this.renderer.domElement)

    // this.geometry = new THREE.BoxGeometry(1, 1, 1)
    // this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // this.cube = new THREE.Mesh(this.geometry, this.material)
    // this.scene.add(this.cube)

    // this.camera.position.z = 5
    // console.log(this.cube.rotation.x)
    // console.log(this.cube.rotation.y)

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
