<template>
  <div id="indexCon">
    <SearchBar id="searchBar" />
    <van-tabs v-model:active="active" swipeable :sticky="true" :offset-top="70">
      <van-tab v-for="(tab, index) in tabs" :key="index">
        <template v-slot:title>
          <span :class="{ 'custom-tab-button': active === index }">{{
            tab.title
          }}</span>
        </template>
        <component :is="tab.component" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<style lang="scss" scoped>
#indexCon {
  margin-top: 6%;
  margin-bottom: 5%;
}

#searchBar {
  background-color: #f0f0f0;
  width: 100%;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
}

.custom-tab-button {
  font-size: larger;
}

:deep(.van-tabs__line) {
  background-color: transparent;
  /* 设置底线颜色为透明 */
}

/* 使用媒体查询来设置不同屏幕尺寸下的填充 */
@media (max-width: 1140px) {
  //小於
  #indexCon {
    margin-top: 50%;
    margin-bottom: 5%;
  }
}

@media (max-width: 1110px) {
  //小於
  #indexCon {
    margin-top: 10%;
    margin-bottom: 15%;
  }
}

@media (max-width: 880px) {
  //小於
  #indexCon {
    margin-top: 13%;
    margin-bottom: 20%;
  }
}

@media (max-width: 830px) {
  //小於
  #indexCon {
    margin-top: 15%;
    margin-bottom: 25%;
  }
}

@media (min-width: 1139px) {
  //大於
  #content {
    margin-top: 20%;
    margin-bottom: 10%;
  }
}
</style>

<script>
import SearchBar from "../../components/searchBar.vue";
import FocusView from "./FocusView.vue";
import RecommendView from "./RecommendView.vue";
import InformationView from "./InformationView.vue";
import LocalView from "./LocalView.vue";
import SelectView from "./SelectView.vue";
import BusniessView from "./BusniessView.vue";
import { ref, onMounted } from "vue";
import * as shareFunctions from "@/utils/shareFunctions"; // 确保路径正确

export default {
  name: "IndexView",

  components: {
    SearchBar,
    FocusView,
    RecommendView,
    InformationView,
    LocalView,
    SelectView,
    BusniessView,
    // ...mapGetters("ws", ["getToken", "gethomePushFollower"]),
  },

  setup() {
    const active = ref(0);

    const tabs = [
      { title: "關注", component: FocusView },
      { title: "推薦", component: RecommendView },
      { title: "資訊", component: InformationView }, // 确保 "資訊" 标签页使用正确的组件
      { title: "精選", component: SelectView },
      { title: "本地", component: LocalView },
      { title: "商務服務", component: BusniessView },
    ];

    onMounted(() => {
      shareFunctions.homePushFollowerApi();
      shareFunctions.homePushFollowApi("bbs");
      shareFunctions.homePushFollowApi("news");
      shareFunctions.homeTuijianApi();
      shareFunctions.gethomeInformation();
      shareFunctions.gethomeChoice();
      shareFunctions.gethomeChoiceCategory("1");
      shareFunctions.gethomeLocalBBS("ph");
      shareFunctions.gethomeLocalNews("ph");
      shareFunctions.gethomeBusiness("1");
      shareFunctions.gethomeBusiness("2");
      shareFunctions.gethomeBusiness("3");
      shareFunctions.gethomeBusiness("4");
    });

    return { active, tabs };
  },
};
</script>
