<template>
  <div tabindex="-1" id="offcanvas-Company">
    <div class="offcanvas-header profile-TGGroupHeader">
      <router-link :to="{ name: 'profile' }">
        <button type="button" class="text-reset custom-backbtn">
          <img src="img/back icon.png" /></button
      ></router-link>
    </div>
    <div class="offcanvas-body profile-TGGroupBody">
      <div class="profile-CompanyTitle">
        <div class="profile-CompanyTitles">成为企业账号</div>
        <div class="profile-CompanyTitles2">
          享受发布职位、查看简历等企业福利
        </div>
        <img src="img/profilePic3.jpg" />
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs profile-CompanyContactUs"
          type="button"
        >
          <router-link :to="{ name: 'ProfileViewContact' }">
            <img src="img/whiteplan.png" />
            <div class="profile-CompanyContactUsText">联系我们</div>
          </router-link>
        </btn>
        <div class="profile-CompanyText">Kevin@bb-media.me</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("../../../public/css/profile.css");
</style>
<script>
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("ws", ["getMyFansData"]),
  },

  setup() {
    onMounted(() => {});
    return {};
  },
};
</script>
