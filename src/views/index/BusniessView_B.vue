<template v-if="gethomeBusinessBData">
  <router-link :to="{ name: 'article', params: { id: item.tid } }" @click="$shareFunctions.SentArticleApi(item.tid)" v-for="item in gethomeBusinessBData" :key="item.tid">
    <div class="newsCon2">
        <div class="newsConLeft">
          <div class="newsTitle">
            {{item.subject}}
          </div>
          <div class="newstag">
        <!-- BananaFish少資料 -->
            <span>产业新闻</span>
            <span v-if="item.displayorder">置顶</span>
          </div>
        </div>
        <div class="newsConRight">
          <img :src="item.attachment" />
        </div>
      </div>
</router-link>
   
</template>
<style lang="scss" scoped>
@import "../../../public/css/index.css";
</style>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";
import { send } from "@/utils/socket";
import Cookies from "js-cookie"; // 导入 js-cookie

export default {
  name: "BusniessView",
  components: {},
  computed: {
    ...mapGetters("ws", ["gethomeBusinessBData"]),
  },
  setup() {
    const token = ref("");
    const active = ref(0);

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
      active,
    };
  },
};
</script>