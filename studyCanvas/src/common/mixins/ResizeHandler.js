export default{
  methods: {
    resizeHandler () {
      let width = document.body.clientWidth
      console.log(width)
      this.$refs.container.style.width = width
    }
  }
}
