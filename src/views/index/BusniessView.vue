<template>
  <van-tabs v-model:active="active" swipeable>
    <van-tab title="流量渠道">
      <busniess-view-a></busniess-view-a>
    </van-tab>
    <van-tab title="商務訊息">
      <busniess-view-b></busniess-view-b>
    </van-tab>
    <van-tab title="博牛投資">
      <busniess-view-c></busniess-view-c>
    </van-tab>
    <van-tab title="商務服務">
      <busniess-view-d></busniess-view-d>
    </van-tab>
  </van-tabs>
</template>
<style lang="scss" scoped>
@import "../../../public/css/index.css";
</style>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";
import BusniessViewA from "./BusniessView_A.vue";
import BusniessViewB from "./BusniessView_B.vue";
import BusniessViewC from "./BusniessView_C.vue";
import BusniessViewD from "./BusniessView_D.vue";

export default {
  name: "BusniessView",
  components: {
    BusniessViewA,
    BusniessViewB,
    BusniessViewC,
    BusniessViewD,
  },
  computed: {
    ...mapGetters("ws", ["gethomeTuijianArticle"]),
  },
  setup() {

    const active = ref(0);


    return {

      active,
    };
  },
};
</script>
