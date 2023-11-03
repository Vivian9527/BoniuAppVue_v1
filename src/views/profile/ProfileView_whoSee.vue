<template>
  <div>
    <div class="offcanvas-header profile-TGGroupHeader">
      <router-link :to="{ name: 'profile' }">
        <button type="button" class="text-reset custom-backbtn">
          <img src="img/back icon.png" /></button
      ></router-link>
      <div class="profile-TGGroupTitle">谁看了我</div>
    </div>
    <div class="offcanvas-body profile-TGGroupBody" id="offcanvas-WhoSeensSon">
      <div
        class="SearchForAllPagesDetailCompanyContainer"
        v-if="getCheckedData && getCheckedData.length != 0"
      >
        <div
          class="SearchForAllPagesDetailCompanyContainer2"
          v-for="item in getCheckedData"
          :key="item.id"
        >
          <div class="SearchForAllPagesDetailCompanyHeader">
            <div class="SearchForAllPagesDetailCompanyTitle">
              <div class="SearchForAllPagesDetailCompanyImgContainer">
                <img :src="items.logo" alt="Your Image" />
              </div>
              <div class="SearchForAllPagesDetailCompanyImgIcon">V</div>
            </div>
            <div class="SearchForAllPagesDetailCompanyName2">
              <div>{{ items.name }}</div>
            </div>
          </div>
          <!-- BananaFish缺很多API -->
          <div class="SearchForAllPagesDetailRequirements2">
            <div class="SearchForAllPagesDetailRequirement2">不限</div>
            <div class="SearchForAllPagesDetailRequirement2">不限</div>
            <div class="SearchForAllPagesDetailRequirement2">菲律宾·马尼拉</div>
          </div>
          <div class="SearchForAllPagesDetailCompanyJob">
            热招职位 ：其他岗位等1个职位
          </div>
        </div>
      </div>
      <div class="profile-CompanyTitle">
        <img src="img/ic_list_empty.png" />
        <div class="profile-CompanyTitles2">暂无更多内容</div>
      </div>
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
    ...mapGetters("ws", ["getCheckedData"]),
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
