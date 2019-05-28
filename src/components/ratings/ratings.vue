<template>
  <div class="ratings">
    I'm ratings!
    <div class="wrapper">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide">
        <p v-show="show">Hello</p>
      </transition>
      <cart-control :food="food"></cart-control>
    </div>
  </div>
</template>

<script>
import goodsData from '../../../data.json'
import CartControl from 'components/cart-control/cart-control'

const goods = goodsData.goods

export default {
  name: 'ratings',
  data() {
    return {
      data: goods,
      count: 0,
      current: goods[3].name,
      scrollOptions: {
        click: false
      },
      show: true,
      food: {
        count: 0
      }
    }
  },
  methods: {
    add(evt) {
      console.log(evt.target)
      this.count++
      this.$emit('add', evt.target)
    }
  },
  components: {
    CartControl
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 500px
  p
    font-size 20px
  .slide-enter-active, .slide-leave-active
    transition all .3s ease
  .slide-enter, .slide-leave-to
    transform translateY(10px)
    opacity 0
</style>
