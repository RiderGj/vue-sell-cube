<template>
  <div class="cart-control">
    <transition name="slide">
      <div v-show="food.count>0" class="sub">
        <i class="inner icon-remove_circle_outline" @click.stop="sub"></i>
      </div>
    </transition>
    <div v-show="food.count>0" class="foodCount">{{ food.count }}</div>
    <div class="add icon-add_circle" @click.stop="add($event)"></div>
  </div>
</template>

<script>
export default {
  name: 'cart-control',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    add(evt) {
      console.log(evt.target)
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    sub() {
      if (this.food.count > 0) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cart-control
    display flex
    color $color-blue
    font-size 24px
    line-height 24px
    height 24px
    .sub
      display inline-block
      font-size 24px
      line-height 24px
      .inner
        transform rotate(0deg)
        transition all 0.5s ease
      &.slide-enter-active, &.slide-leave-active
        transition all 0.5s ease
      &.slide-enter, &.slide-leave-to
        transform translateX(10px)
        opacity 0
        .inner
          transform rotate(180deg)
    .foodCount
      display flex
      justify-content center
      width 24px
      font-size 10px
      color $color-grey
      line-height 24px
    .add
      display inline-block
      text-align right
</style>
