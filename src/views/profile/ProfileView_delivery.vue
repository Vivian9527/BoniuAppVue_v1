<template>
  <div>
    <div class="offcanvas-header profile-TGGroupHeader">
      <router-link :to="{ name: 'profile' }">
        <button type="button" class="text-reset custom-backbtn">
          <img src="img/back icon.png" /></button
      ></router-link>
      <div class="profile-TGGroupTitle">投递记录</div>
    </div>
    <div
      class="SearchForAllPagesDetailJobCard"
      v-if="getDeliveryData && getDeliveryData.length != 0"
    >
      <div
        class="SearchForAllPagesDetailJobCardContainer"
        v-for="item in getDeliveryData1"
        :key="item.id"
      >
        <div class="SearchForAllPagesDetailHeader">
          <div class="SearchForAllPagesDetailJobCardTitle">
            <div>{{ items.position_name }}</div>
          </div>
          <div class="SearchForAllPagesDetailSalary">
            <span class="SearchForAllPagesDetailBlueText">20k-30k</span>
          </div>
        </div>
        <!-- BananaFish 條件 無API -->
        <div class="SearchForAllPagesDetailRequirements">
          <div class="SearchForAllPagesDetailRequirement">不限</div>
          <div class="SearchForAllPagesDetailRequirement">不限</div>
          <div class="SearchForAllPagesDetailRequirement">菲律宾·马尼拉</div>
        </div>
        <div class="SearchForAllPagesDetailCompany">
          <div class="SearchForAllPagesDetailCompanyInfo">
            <img src="img/comp1.jpeg" alt="公司图片" />
            <!-- BananaFish規模 薪水 無API -->
            <div class="SearchForAllPagesDetailCompanyName">
              <span>{{ items.firm_name }}</span
              >-<span>{{ items.nickname }}</span
              >·<span>20-100</span>人
            </div>
          </div>
        </div>
        <div class="SearchForAllPagesDetailCompanyTimeContainer">
          <div class="SearchForAllPagesDetailCompanyTime">
            <!-- 標籤 -->
            {{ items.update_time }}
          </div>
          <!-- BananaFish是否處理 無API -->
          <div class="SearchForAllPagesDetailCompanyConfirmText">未处理</div>
        </div>
      </div>
    </div>
    <div class="offcanvas-body profile-TGGroupBody" v-else>
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
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("ws", ["getDeliveryData"]),
  },
  getDeliveryData1() {
    if (this.getDeliveryData.length > 0) {
      return this.getDeliveryData[0];
    }
    return 0; // 或其他默认值
  },

  setup() {
    onMounted(() => {});
    return {};
  },
};
</script>
