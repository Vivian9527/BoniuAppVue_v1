<template>
    <a class="newsAdCon" v-if="randomAd" :href="randomAd.url" target="_blank">
        <div class="newsAdImgCon">
            <img :src="randomAd.pic" />
        </div>
        <div class="newsAdTextCon">
            <div>{{randomAd.title}}</div>
            <div class="newsAdTextCon2">
                <span>{{randomAd.business_name}}</span>
                <button>廣告</button>
            </div>
        </div>
    </a>
</template>
<style lang="scss" scoped>
.newsAdCon {
  padding: 5%;
  border-bottom: 1px #d0d0d0 solid;
  margin-bottom: 30px;
}

.newsAdImgCon {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.newsAdImgCon img {
  border-radius: 10px;
  max-width: 100%;
  /* 图像最大宽度为容器宽度 */
  max-height: 100%;
  /* 图像最大高度为容器高度 */
  width: auto;
  height: auto;
}

.newsAdTextCon2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 10px;
}

.newsAdTextCon2 span:nth-child(1) {
  color: gray;
}

.newsAdTextCon2 button {
  color: white;
  background-color: gray;
}
</style>
<script>
import { mapGetters } from "vuex";


export default {
  name: "randomAd",
  components: {},
  computed: {
    ...mapGetters("ws", ["gethomeTuijianAd"]),
    randomAd() {
      const ads = this.gethomeTuijianAd;
      if (ads.length === 0) {
        return {}; // 或者其他默认值
      }
      const randomIndex = Math.floor(Math.random() * ads.length);
      return ads[randomIndex];
    },
  },
  setup() {
   
    return {

    };
  },
};
</script>
