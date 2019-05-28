<template>
  <div class="tab">
    <div class="tabHead">
      <cube-tab-bar
        v-model="selectedTab"
        :data="tabs"
        :useTransition="false"
        :showSlider="true"
        ref="tabBar"
      ></cube-tab-bar>
    </div>
    <div class="tabSlide">
      <cube-slide
        :initialIndex="index"
        :loop="false"
        :showDots="false"
        :auto-play="false"
        ref="slide"
        :options="slideOptions"
        @change="changeTab"
        @scroll="onScroll"
      >
        <cube-slide-item v-for="(tab, index) of tabs" :key="index">
          <component :is="tab.component" :data="tab.data" ref="component"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    seller: {},
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
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
  mounted() {
    this.changeTab(this.index)
  },
  methods: {
    changeTab(current) {
      this.index = current
      const comp = this.$refs.component[current]
      comp.getGoods && comp.getGoods()
    },
    onScroll(pos) {
      // console.log(pos.x)
      // console.log(this.$refs)
      const tabWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = -pos.x / slideWidth * tabWidth
      this.$refs.tabBar.setSliderTransform(transform)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.tab {
  >>> .cube-tab {
    padding: 10px 0;
  }

  display: flex;
  flex-direction: column;
  height: 100%;

  .tabSlide {
    flex: 1;
    overflow hidden
  }
}
</style>
