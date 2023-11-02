<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>測試發出及取出一筆一筆印在畫面上</h1>
    <ul v-if="gethomePushFollower.length > 0">
      <li v-for="(item, index) in gethomePushFollower" :key="index">
        {{ item.intro }}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { send } from "@/utils/socket";
import { mapGetters } from "vuex"; // 导入 mapGetters

export default {
  name: "HomeView",
  computed: {
    ...mapGetters("ws", ["gethomePushFollower"]), // 使用 mapGetters 将 gethomePushFollower 映射到组件中
  },
  setup() {
    const handleGetName = () => {
      const requestData = {
        apiName: "homePushFollower",
        token: "154bf93f40788f4edd83081e64b938a0",
      };
      send(requestData);
    };

    onMounted(() => {
      // 初始化数据，或者执行其他操作
      handleGetName();
    });

    return {
      handleGetName,
    };
  },
};
</script>
