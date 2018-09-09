import Vue from 'vue'
import Router from 'vue-router'
import Three from '@/views/three/three'
import FishGame from '@/views/fish-game/fish-game'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Three',
      component: Three
    },
    {
      path: '/fish-game',
      name: 'FishGame',
      component: FishGame
    }
  ]
})
