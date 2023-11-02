<template>
  <div class="focusRecommend">
    <div class="focusRecommendTitleDiv">
      <div class="focusRecommendTitle">推荐关注</div>
      <div class="focusRecommendChange">
        <span>換一換</span>
        <img src="img/ic_discover_small_refresh.png" alt="" />
      </div>
    </div>
    <div class="recommendFocusSlider" v-if="randomFollower">
      <swiper class="swiper" :modules="modules" :space-between="30" :slides-per-view="3" :free-mode="true">
        <swiper-slide class="slide" v-for="item in randomFollower" :key="item.uid">
          <router-link :to="{ name: 'author', params: { id: item.uid } }" @click="$shareFunctions.getUserContent(item.uid,1)">
          <div class="focusRecommendCard">
            <div class="focusRecommendCardPic">
              <img :src="item.photo_url" alt="" />
            </div>
            <div>{{item.nickname}}</div>
            <div>{{item.title}}</div>
            <div>
              <button>＋关注</button>
            </div>
          </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../public/css/index.css";

.recommendFocusSlider {
  padding: 3%;
}
</style>
<script>
import { defineComponent } from "vue";
import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { mapGetters } from "vuex";



export default defineComponent({
  name: "swiper-example-free-mode",
  title: "Free mode / no fixed positions",
  url: import.meta.url,
  computed: {
    ...mapGetters("ws", ["gethomePushFollower"]),

    randomFollower() {
  const ads = this.gethomePushFollower;
  const randomAds = [];

  if (ads.length === 0) {
    return randomAds; // 返回空數組
  }

  // 確保要隨機選取的廣告數不超過 ads 數組的長度
  const numRandomAds = Math.min(6, ads.length);

  // 使用 while 循環隨機選取 6 筆廣告
  while (randomAds.length < numRandomAds) {
    const randomIndex = Math.floor(Math.random() * ads.length);
    const randomAd = ads[randomIndex];

    // 如果 randomAd 還未被選取，則將其添加到 randomAds 中
    if (!randomAds.includes(randomAd)) {
      randomAds.push(randomAd);
    }
  }

  return randomAds;
}


  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
   
    return {
      modules: [Pagination, FreeMode],

    };
  },
});
</script>
