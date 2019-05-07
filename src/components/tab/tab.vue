<template>
  <div class="tab">
    <cube-tab-bar
      v-model="selectedTab"
      :data="tabs"
      :useTransition="true"
      :showSlider="true"
      ref="tabBar"
    ></cube-tab-bar>
    <div class="slide">
      <cube-slide
        :initialIndex="index"
        :loop="false"
        :showDots="false"
        :auto-play="false"
        ref="slide"
      >
        <cube-slide-item>
          <goods></goods>
        </cube-slide-item>
        <cube-slide-item>
          <ratings></ratings>
        </cube-slide-item>
        <cube-slide-item>
          <seller></seller>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

export default {
  name: 'tab',
  data() {
    return {
      index: 0,
      tabs: [{
        label: '商品'
      }, {
        label: '评价'
      }, {
        label: '商家'
      }]
    }
  },
  computed: {
    selectedTab: {
      get() {
        return this.tabs[this.index].label
      },
      set(newValue) {
        this.index = this.tabs.findIndex((value) => value.label === newValue)
      }
    }
  },
  components: {
    Goods,
    Ratings,
    Seller
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.tab {
  >>> .cube-tab {
    padding: 10px 0;
  }

}
</style>
