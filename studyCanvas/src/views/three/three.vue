<template>
  <div class="three-container">
  </div>
</template>

<script>
import * as THREE from 'three'
import Stats from 'three/examples/js/libs/stats.min.js'
import OrbitControls from 'three/examples/js/controls/OrbitControls.js'
// import 'three-orbitcontrols'
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
    // console.log(new THREE.OrbitControls())
    this.init()
  },
  methods: {
    resizeHandler (e) {
      let target = e.target
      this.renderer.domElement.style.width = target.innerWidth + 'px'
      this.renderer.domElement.style.height = target.innerHeight + 'px'
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.stats.update()
      // this.cube.rotation.x += 0.01
      // this.cube.rotation.y += 0.01

      this.renderer.render(this.scene, this.camera)
    },
    handleClick () {
      // var geometry = new THREE.BoxGeometry(1, 1, 1)
      // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      // var cube = new THREE.Mesh(geometry, material)
      // this.camera.position.z = 5
      // this.scene.add(cube)
    },
    init () {
      this.container = document.querySelector('.three-container')

      this.stats = this.initStats() // 左上角帧数

      this.scene = new THREE.Scene() // 创建场景

      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000) // 创建摄影机
      this.camera.fov = 45
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.near = 1
      this.camera.far = 1000

      // this.camera.position.z = 8
      // var renderer = new THREE.CanvasRenderer()     //几何级别的渲染，兼容性更好

      // var renderer = new THREE.WebGLRenderer()       //像素级的渲染，渲染效果更好
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight) // 设置画布大小
      this.renderer.setPixelRatio(window.devicePixelRatio) // 设置像素比，针对高清屏
      this.renderer.setClearColor('rgb(135,206,250)', 1.0)
      // this.renderer.setClearColor('rgb(6,6,6)', 1.0)
      this.renderer.domElement.classList.add('canvas')

      this.container.appendChild(this.renderer.domElement)

      // 添加轨道控制器
      // 新建一个轨道控制器
      this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
      this.camera.position.set(10, 10, 10)
      this.camera.lookAt({x: 0, y: 0, z: 0})
      // this.orbitControls.target = new THREE.Vector3(0, 0, 0)// 控制焦点
      // this.orbitControls.autoRotate = false// 将自动旋转关闭
      // this.clock = new THREE.Clock()// 用于更新轨道控制器

      this.initFloor()

      // 场景objec初始化写在后面
      // this.initCamera()
      this.initXYZ()
      // this.initZoom()
      this.initCameraMove()
      this.animate()
    },
    // 初始化统计对象
    initStats () {
      var stats = new Stats()
      // 设置统计模式
      stats.setMode(0) // 0: fps, 1: ms
      // 统计信息显示在左上角
      stats.domElement.style.position = 'absolute'
      stats.domElement.style.left = '0px'
      stats.domElement.style.top = '0px'
      // 将统计对象添加到对应的<div>元素中
      this.container.appendChild(stats.domElement)
      return stats
    },
    initFloor () {
      // 创建一个立方体
      // var geometry = new THREE.BoxGeometry(80, 20, 80)
      // for (var i = 0; i < geometry.faces.length; i += 2) {
      //   var hex = Math.random() * 0xffffff
      //   geometry.faces[ i ].color.setHex(hex)
      //   geometry.faces[ i + 1 ].color.setHex(hex)
      // }
      // var material = new THREE.MeshBasicMaterial({color: 0xCC0001})
      // // 将material材料添加到几何体geometry
      // var mesh = new THREE.Mesh(geometry, material)
      // // mesh.position = new THREE.Vector3(0, 0, 0)
      // this.scene.add(mesh)
    },
    initXYZ () {
      var materialX = new THREE.LineBasicMaterial({color: 0xCC0001})
      var materialY = new THREE.LineBasicMaterial({color: 0x3385FF})
      var materialZ = new THREE.LineBasicMaterial({color: 0x1AAD19})

      var geometryX = new THREE.Geometry()
      geometryX.vertices.push(
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(10, 0, 0)
      )

      var geometryY = new THREE.Geometry()
      geometryY.vertices.push(
        new THREE.Vector3(0, -10, 0),
        new THREE.Vector3(0, 10, 0)
      )

      var geometryZ = new THREE.Geometry()
      geometryZ.vertices.push(
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(0, 0, 10)
      )
      var lineX = new THREE.Line(geometryX, materialX)
      var lineY = new THREE.Line(geometryY, materialY)
      var lineZ = new THREE.Line(geometryZ, materialZ)
      this.scene.add(lineX)
      this.scene.add(lineY)
      this.scene.add(lineZ)

      for (let i = 0; i <= 20; i++) {
        var geometryXs = new THREE.Geometry()
        var geometryZs = new THREE.Geometry()
        geometryXs.vertices.push(
          new THREE.Vector3(-10, 0, i - 10),
          // new THREE.Vector3(0, 10, 0),
          new THREE.Vector3(10, 0, i - 10)
        )
        geometryZs.vertices.push(
          new THREE.Vector3(i - 10, 0, -10),
          new THREE.Vector3(i - 10, 0, 10)
        )
        var lineXs = new THREE.Line(geometryXs, materialX)
        var lineYs = new THREE.Line(geometryZs, materialZ)
        this.scene.add(lineXs)
        this.scene.add(lineYs)
      }
    },
    initZoom () {
      this.container.addEventListener('mousewheel', (e) => {
        e.preventDefault()
        var fov = this.camera.fov
        if (e.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) { // 当滑轮向上滚动时
            fov -= (this.near < fov ? 1 : 0)
          }
          if (e.wheelDelta < 0) { // 当滑轮向下滚动时
            fov += (fov < this.far ? 1 : 0)
          }
        } else if (e.detail) { // Firefox滑轮事件
          if (e.detail > 0) { // 当滑轮向上滚动时
            fov -= 1
          }
          if (e.detail < 0) { // 当滑轮向下滚动时
            fov += 1
          }
        }
        // 改变fov值，并更新场景的渲染
        this.camera.fov = fov
        this.camera.updateProjectionMatrix()
        this.renderer.render(this.scene, this.camera)
        // updateinfo();
        console.log('scrol')
      })
    },
    initCameraMove () {
      window.addEventListener('keyup', (e) => {
        // w,s,a,d keyCode 87,83,65,68
        var keyCode = e.keyCode
        switch (keyCode) {

        }
        console.log(e)
      })
    },
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000) // 创建摄影机
      this.camera.fov = 45
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.near = 1
      this.camera.far = 1000

      this.camera.position.set(0, 110, 110)
      this.camera.lookAt({x: 0, y: 0, z: 0})
      // 添加轨道控制器
      // 新建一个轨道控制器
      this.orbitControls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
      this.orbitControls.target = new THREE.Vector3(0, 0, 0)// 控制焦点
      this.orbitControls.autoRotate = false// 将自动旋转关闭
      this.clock = new THREE.Clock()// 用于更新轨道控制器
    }
  }
}
</script>

<style lang="stylus">
.three-container{
}
</style>
