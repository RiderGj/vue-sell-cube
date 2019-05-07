<template>
  <transition name="detail-show" v-if="isShow">
    <div class="header-detail">
      <div class="background"></div>
      <div class="seller">
        <div class="seller-name">{{seller.name}}</div>
        <div class="seller-star">
          <star :size="48" :score="seller.score"></star>
        </div>
      </div>
      <div class="supports-info" v-if="seller.supports">
        <div class="supports-title">
          <hr class="title">
          <span class="title-name">优惠信息</span>
          <hr class="title">
        </div>
        <div class="supports-item" v-for="(supItem, index) of seller.supports" :key="index">
          <support-ico :size="2" :type="supItem.type"></support-ico>
          <span class="support-descrip">{{ supItem.description }}</span>
        </div>
      </div>
      <div class="bulletin">
        <div class="bulletin-title">
          <hr class="title">
          <span class="title-name">商家公告</span>
          <hr class="title">
        </div>
        <div class="bulletin-content">{{ seller.bulletin }}</div>
      </div>
      <div class="close" @click="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from 'components/support-ico/support-ico'
import Star from 'components/star/star'

export default {
  name: 'header-detail',
  props: {
    seller: {
      type: Object,
      default: function () {
        return {}
      }
    },
    isShow: function() {
      return false
    }
  },
  components: {
    SupportIco,
    Star
  },
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.header-detail {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  color: #fff;
  z-index: 200;

  .seller {
    display: flex;
    flex-direction: column;
    margin: 64px auto 28px auto;
    font-size: 16px;
    font-weight: 700;

    .seller-name {
      margin: 0 auto 16px auto;
      line-height: 16px;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: $color-background-s;
    filter: blur(5px);
    z-index: -1;
  }

  .supports-info {
    margin: 0 36px 28px 36px;

    .supports-item {
      display: flex;
      align-items: center;
      height: 16px;
      margin: 0 12px 12px 12px;

      .support-descrip {
        font-size: 12px;
        margin-left: 6px;
        font-weight: 100;
        line-height: 12px;
      }
    }
  }

  .supports-title, .bulletin-title {
    display: flex;
    margin-bottom: 24px;

    .title-name {
      margin: auto 12px;
      font-weight: 350;
      font-size: 14px;
    }

    .title {
      flex: 1;
      color: rgba(255, 255, 255, 0.2);
    }
  }

  .bulletin {
    margin: 0 36px;

    .bulletin-content {
      font-size: 12px;
      font-weight: 100px;
      line-height: 24px;
    }
  }

  .close {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 32px;

    .icon-close {
      font-size: 32px;
      color: rbga(255, 255, 255, 0.5);
    }
  }
}

.detail-show-enter-active
  transition all .3s ease

.detail-show-leave-active
  transition all .3s ease
</style>
