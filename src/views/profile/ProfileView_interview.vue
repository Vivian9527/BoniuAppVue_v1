<template>
  <div>
    <div class="offcanvas-header profile-TGGroupHeader">
      <router-link :to="{ name: 'profile' }">
        <button type="button" class="text-reset custom-backbtn">
          <img src="img/back icon.png" /></button
      ></router-link>
      <div class="profile-TGGroupTitle">面试记录</div>
    </div>
    <div class="overlay"></div>
    <!-- BananaFish前端未刻 如果有履歷 沒面試資料狀況 -->
    <div class="InterviewHistoryBox" v-if="getInterviewData != 0">
      <img src="img/defempty.png" />
      <div class="InterviewHistoryBoxText">您还未上传简历</div>
      <router-link :to="{ name: 'ProfileViewMyCv' }">
        <button type="button" class="text-reset custom-backbtn">
          <btn class="InterviewHistoryBTN"> 去上传 </btn>
        </button></router-link
      >
    </div>
  </div>
</template>
<style scoped>
@import url("../../../public/css/profile.css");
</style>
<script>
import { ref } from "vue";
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("ws", ["getInterviewData"]),
  },

  setup() {
    const active = ref(0);
    onMounted(() => {});
    return {
      active,
    };
  },
};
</script>
