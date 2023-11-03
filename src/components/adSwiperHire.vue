<template>
  <div id="adSlider">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <div v-for="(item, index) in gethire_bannerData" :key="index">
        <van-swipe-item
          ><a :href="item.extra" target="_blank"
            ><img :src="item.img_url" alt="img1.jpg" /></a
        ></van-swipe-item>
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
import * as hireFun from "@/utils/hireFun"; // 确保路径正确
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("ws", ["gethire_bannerData"]),
  },
  setup() {
    onMounted(() => {
      hireFun.getHirebanner();
    });

    return {};
  },
};
</script>
