<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tabWrapper">
      <tab :seller="seller" :tabs="tabs" :initialIndex="0"></tab>
      <!-- <goods></goods> -->
    </div>
  </div>
</template>

<script>
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import VHeader from 'components/v-header/v-header'
import Tab from 'components/tab/tab'
import { getSeller } from 'api'
// import Slide from 'components/slide/slide'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评价',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then(res => {
        this.seller = res
      })
    }
  },
  components: {
    VHeader,
    Tab
    // Goods
    // Slide
  }
}
</script>
<style lang="stylus">
.tabWrapper {
  position: fixed;
  top: 137px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
