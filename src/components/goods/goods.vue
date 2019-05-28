<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        :side="true"
        :data="goods"
        :options="scrollOptions"
        v-if="goods.length"
        @change="onChange"
      >
        <cube-scroll-nav-panel
          v-for="item in goods"
          :key="item.name"
          :label="item.name"
          :title="item.name"
        >
          <ul>
            <li v-for="food in item.foods" :key="food.name">
              <div class="food">
                <div class="foodImg">
                  <img :src="food.icon">
                </div>
                <div class="foodContent">
                  <p class="foodName">{{ food.name }}</p>
                  <p>{{ food.description }}</p>
                  <p class="foodSell">
                    <span class="sellCount">月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </p>
                  <p class="foodPrice">
                    <span class="currentPrice">￥{{ food.price }}</span>
                    <del class="oldPrice" v-if="food.oldPrice.length!=0">￥{{ food.oldPrice }}</del>
                  </p>
                </div>
                <div class="cart-control-wrap">
                  <cart-control
                    :food="food">
                  </cart-control>
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="shop-cart-wrapper">
      <shop-cart
        :selectedFoods="selectedFoods"
        :delivery-price="seller.deliveryPrice"
        :min-price="seller.minPrice"></shop-cart>
    </div>
  </div>
</template>

<script>
import { getGoods } from 'api'
import ShopCart from 'components/shop-cart/shop-cart'
import CartControl from 'components/cart-control/cart-control'

export default {
  name: 'goods',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      goods: [],
      scrollOptions: {
        click: false,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    seller() {
      console.log(this.data)
      return this.data.seller
    },
    selectedFoods() {
      let ret = []
      this.goods.forEach(good => {
        // console.log(good)
        good.foods.forEach(food => {
          if (food.count) {
            ret.push(food)
          }
        })
      })
      console.log(ret)
      return ret
    }
  },
  methods: {
    getGoods() {
      getGoods().then(res => {
        this.goods = res
      })
    },
    onChange(cur) {
      console.log(cur)
      console.log(this.seller)
    }
  },
  components: {
    ShopCart,
    CartControl
  }
}
</script>

<style lang="stylus" scoped>
.goods {
  position: relative;
  height: 100%;

  .scroll-nav-wrapper {
    position: absolute;
    bottom: 58px;
    left: 0;
    top: 0;
    width: 100%;
  }

  >>> .cube-scroll-nav-panel-title {
    background-color: $color-background-ssss;
    color: $color-grey;
    line-height: 26px;
    height: 26px;
    font-size: 12px;
    padding-left: 12px;
    border-left: 2px solid $color-col-line;
  }

  >>> .cube-scroll-nav-bar-items {
    color: $color-background;
    background-color: $color-background-ssss;
    font-size: 12px;

    .cube-scroll-nav-bar-item {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 56px;
      height: 54px;
      line-height: 14px;
      font-weight: 200;
      padding: 0 12px;

      span {
        font-size: 12px;
        display: flex;
        width: 56px;
        height: 100%;
        align-items: center;
        justify-content: center;
        white-space: normal;
        border-bottom: 1px solid $color-row-line;
      }
    }

    .cube-scroll-nav-bar-item_active {
      background-color: #fff;
    }
  }

  .food {
    display: flex;
    padding: 18px;

    .foodImg {
      margin-right: 10px;

      img {
        width: 50px;
        height: 50px;
      }
    }

    .foodContent {
      font-size: 10px;
      color: $color-grey;
      width 100%
      overflow hidden
      .foodName {
        font-size: 14px;
        color: $color-background;
      }

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .foodSell {
        .sellCount {
          display: inline-block;
          margin-right: 12px;
        }
      }

      .foodPrice {
        line-height: 24px;

        .currentPrice {
          display: inline-block;
          margin-right: 8px;
          font-size: 14px;
          color: $color-red;
          font-weight: 700;
        }

        .oldPrice {
          font-size: 10px;
          font-weight: 700;
        }
      }
    }
    .cart-control-wrap {
      display flex
      align-items flex-end
      justify-content flex-end
      position relative
      top 40px
      right 0
      height 26px
    }
  }

  .shop-cart-wrapper {
    width: 33.33%;
    height: 58px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>
