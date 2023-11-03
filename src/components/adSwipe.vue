<template>
  <div id="adSlider" v-if="gethomeTuijianBanner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <div v-for="(item, index) in gethomeTuijianBanner" :key="index">
        <van-swipe-item><img :src="item.pic" alt="img1.jpg" /></van-swipe-item>
      </div>
    </van-swipe>
  </div>
</template>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  height: 10%;
}

#adSlider {
  padding: 5%;
}
</style>

<script>

import { mapGetters } from "vuex";


export default {
  name: "adSwipe",
  components: {},
  computed: {
    ...mapGetters("ws", ["gethomeTuijianBanner"]),
  },
  setup() {


    return {

    };
  },
};
</script>
