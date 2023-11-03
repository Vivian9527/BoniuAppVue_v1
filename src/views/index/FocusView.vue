<template>
  <div id="FocusBigCon">
    <van-tabs v-model:active="active" shrink>
      <van-tab>
        <template v-slot:title>
          <span :class="{ 'custom-tab-button2': active === 0 }">新聞</span>
        </template>
        <div style="height: 100%; overflow: auto">
          <FocusView_news />
        </div>
      </van-tab>
      <van-tab>
        <template v-slot:title>
          <span :class="{ 'custom-tab-button2': active === 1 }">論壇</span>
        </template>
        <FocusView_bbs />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
#FocusBigCon {
  margin-top: 5%;
}
/* 设置非选中状态下的样式 */
:deep(.van-tab__text:not(.custom-tab-button2)) {
  /* 在这里定义非选中状态下的样式 */
  font-size: 15px; /* 未选中时的字体大小 */
  background-color: rgb(222, 219, 219);
  padding: 3px;
  border-radius: 3px;
}

.custom-tab-button2 {
  font-size: 15px;
  color: rgb(40, 40, 254);
  border-radius: 3px;
  font-weight: normal;
}

:deep(.van-tabs__line) {
  background-color: transparent; /* 设置底线颜色为透明 */
}
</style>

<script>
import { ref } from "vue";
import FocusView_news from "./FocusView_news.vue";
import FocusView_bbs from "./FocusView_bbs.vue";

export default {
  setup() {
    const active = ref(0); // 设置默认激活的 Tab 索引

    return { active };
  },
  components: {
    FocusView_news,
    FocusView_bbs,
  },
};
</script>
