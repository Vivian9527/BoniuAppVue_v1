<template v-if="gethomeBusinessCData">
  <router-link :to="{ name: 'article', params: { id: item.tid } }" @click="$shareFunctions.SentArticleApi(item.tid)" v-for="item in gethomeBusinessCData" :key="item.tid">
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


export default {
  name: "BusniessView",
  components: {},
  computed: {
    ...mapGetters("ws", ["gethomeBusinessCData"]),
  },
  setup() {

    const active = ref(0);



    return {

      active,
    };
  },
};
</script>