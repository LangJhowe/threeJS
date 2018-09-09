<template>
  <div class="three-container">
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.scene = new THREE.Scene() // 创建场景

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000) // 创建摄影机
    this.camera.position.z = 8

    this.renderer = new THREE.WebGLRenderer() // 创建渲染器
    this.renderer.setSize(window.innerWidth, window.innerHeight) // 设置画布大小
    this.renderer.setPixelRatio(window.devicePixelRatio) // 设置像素比，针对高清屏
    this.renderer.setClearColor(0x000000, 1) // 设置默认背景色

    let container = document.querySelector('.three-container')
    container.appendChild(this.renderer.domElement)
  },
  methods: {

  }
}
</script>
