<template>
  <div class="bubble">
    <span>{{ num }}</span>
  </div>
</template>

<script>
export default {
  name: 'bubble',
  props: {
    num: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.bubble {
  position absolute
  top -5px
  right -5px
  display flex
  span {
    display inline-block
    background-color $color-red
    width 24px
    font-size 9px
    line-height 16px
    font-weight 700
    border-radius 6px
    text-align center
  }
}
</style>
