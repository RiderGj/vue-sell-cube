<template>
  <div class="shop-cart">
    <div :class="{cartImg: true, imgWrap: isSelected}">
      <i class="icon-shopping_cart"></i>
      <bubble v-show="count>0" :num="count"></bubble>
    </div>
    <div class="totalPrice">
      <p :class="{pSelected: isSelected}">￥{{ totalPrice }}</p>
    </div>
    <div class="deliveryPrice">
      <p>另需配送费￥{{ deliveryPrice }}元</p>
    </div>
    <div class="calculate">
      <button v-show="restPrice>0">还差￥{{ restPrice }}元起送</button>
      <button class="submit" v-show="restPrice<=0">去结算</button>
    </div>
  </div>
</template>

<script>
import Bubble from 'components/bubble/bubble'

export default {
  name: 'shop-cart',
  props: {
    selectedFoods: {
      type: Array,
      default() {
        return []
      }
    },
    minPrice: {
      type: Number,
      default: 10
    },
    deliveryPrice: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isDelivery: false,
      seller: {
        type: Array,
        default() {
          return []
        }
      },
      cartImg: 'cartImg'
    }
  },
  computed: {
    count() {
      let cnt = 0
      this.selectedFoods.forEach(food => {
        cnt += food.count
      })
      return cnt
    },
    isSelected() {
      if (this.totalPrice > 0) {
        return true
      } else {
        return false
      }
    },
    totalPrice() {
      let price = 0
      if (this.selectedFoods.length > 0) {
        this.selectedFoods.forEach(food => {
          price += food.count * food.price
        })
      }
      return price
    },
    restPrice() {
      console.log(this.minPrice)
      let rest = this.minPrice
      if (this.selectedFoods.length > 0) {
        rest = this.minPrice - this.totalPrice
      }
      return rest
    }
  },
  components: {
    Bubble
  }
}
</script>

<style lang="stylus" scoped>
.shop-cart
  position fixed
  left 0
  bottom 0
  display flex
  height 48px
  width 33.33%
  align-items center
  background-color $color-background
  color $color-white-ss
  .cartImg
    display flex
    position relative
    align-items center
    justify-content center
    background-color $color-white-s
    margin 0 18px 2px 18px
    font-size 24px
    height 44px
    width 44px
    line-height 44px
    border 6px solid black
    border-radius 44px
    align-content center
  .imgWrap
    background-color $color-blue
    color white
  .totalPrice
    p
      padding-right 12px
      border-right 1px solid rgba(255, 255, 255, 0.1)
      font-size 16px
      line-height 24px
      font-weight 700
    .pSelected
      color white
  .deliveryPrice
    padding 0 12px
    font-size 12px
    line-height 24px
  .calculate
    position absolute
    height 48px
    width 105px
    right 0
    bottom 0
    button
      border none
      padding 0 8px
      white-space normal
      width 105px
      height 48px
      font-size 12px
      background-color $color-white-s
      color $color-white-ss
      font-weight 700
    .submit
      background-color $color-green
      color white
</style>
