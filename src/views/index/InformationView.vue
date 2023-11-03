<template>
  <div id="newsConGranfather">
    <div class="newsConFather" v-if="gethomeInformationArticleData">
      <template v-for="(item, index) in gethomeInformationArticleData" :key="item">
        <!-- 每五筆資料插入廣告 -->
        <template v-if="index % 5 === 0 && index > 0">
          <randomAd />
        </template>
        <router-link :to="{ name: 'article', params: { id: item.cid } }" @click="$shareFunctions.SentArticleApi(item.cid)">
          <div class="newsCon">
          <div class="newsConLeft">
            <div class="newsTitle">
              {{item.title}}
            </div>
            <div class="newstag">
              <span>{{item.name}}</span>
              <span v-if="item.isTop">置顶</span>
            </div>
          </div>
          <div class="newsConRight">
            <img :src="item.cover_pic" />
          </div>
        </div>
        </router-link>
       
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../public/css/index.css";

#newsConGranfather {
  padding: 10px;
}
</style>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";
import { send } from "@/utils/socket";
import Cookies from "js-cookie"; // 导入 js-cookie;
import randomAd from "../../components/randomAd.vue"; // 导入 js-cookie;

export default {
  name: "RecommendView",
  components: {
    randomAd
  },
  computed: {
    ...mapGetters("ws", ["gethomeInformationArticleData"]),
  },
  setup() {
    const token = ref("");
    const SentArticleApi = (tid) => {
      console.log("發出文章" + tid);
      token.value = Cookies.get("token");
      const requestData = {
        apiName: "CommunityContent",
        token: token.value,
        tid: tid,
      };
      send(requestData);
    };

    return {
      SentArticleApi,
    };
  },
};
</script>
