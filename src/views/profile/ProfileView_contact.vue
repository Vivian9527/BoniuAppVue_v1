<template>
  <div id="offcanvas-ContactUs">
    <div class="offcanvas-header profile-TGGroupHeader">
      <router-link :to="{ name: 'profile' }">
        <button type="button" class="text-reset custom-backbtn">
          <img src="img/back icon.png" /></button
      ></router-link>
      <div class="profile-TGGroupTitle">联系我们</div>
    </div>
    <div
      class="offcanvas-body profile-TGGroupBody"
      id="profile-ContactUsBigConFa"
    >
      <div class="profile-ContactUsTitle">{{ getContactUsData1.name }}</div>
      <div id="ContactUsBusiness">
        <div
          class="profile-ContactUsManager"
          v-for="item in getContactUsData1.options"
          :key="item.id"
        >
          <div class="profile-ContactUsManagerLeft">
            <img :src="item.photoUrl" />
            <div class="profile-ContactUsManagerName">
              <div class="profile-ContactUsManagerNames">{{ item.name }}</div>
              <div class="profile-ContactUsManagerNames2">{{ item.at }}</div>
            </div>
          </div>
          <a
            :href="item.href"
            target="_blank"
            class="profile-ContactUsManagerRight"
          >
            <img src="img/whiteplan.png" />
            <div class="profile-ContactUsManagerRightText">联系</div>
          </a>
        </div>
      </div>

      <div class="profile-ContactUsTitle">{{ getContactUsData2.name }}</div>
      <div id="ContactUsBusiness">
        <div
          class="profile-ContactUsManager"
          v-for="item in getContactUsData2.options"
          :key="item.id"
        >
          <div class="profile-ContactUsManagerLeft">
            <img :src="item.photoUrl" />
            <div class="profile-ContactUsManagerName">
              <div class="profile-ContactUsManagerNames">{{ item.name }}</div>
              <div class="profile-ContactUsManagerNames2">{{ item.at }}</div>
            </div>
          </div>
          <a :href="item.href" class="profile-ContactUsManagerRight">
            <img src="img/whiteplan.png" />
            <div class="profile-ContactUsManagerRightText">联系</div>
          </a>
        </div>
      </div>
      <div class="profile-ContactUsTitle"></div>
      <div class="profile-ContactUsManager">
        <a
          href="Kevin@bb-media.me"
          target="_blank"
          class="profile-ContactUsManagerLeft"
          style="text-decoration: none"
        >
          <img :src="getContactUsData3.photoUrl" />
          <div class="profile-ContactUsManagerName">
            <div class="profile-ContactUsManagerNames">
              {{ getContactUsData3.name }}
            </div>
          </div>
        </a>
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
    ...mapGetters("ws", ["getContactUsData"]),
    getContactUsData1() {
      if (this.getContactUsData.length > 0) {
        return this.getContactUsData[0];
      }
      return 0; // 或其他默认值
    },
    getContactUsData2() {
      if (this.getContactUsData.length > 0) {
        return this.getContactUsData[1];
      }
      return 0; // 或其他默认值
    },
    getContactUsData3() {
      if (this.getContactUsData.length > 0) {
        return this.getContactUsData[2];
      }
      return 0; // 或其他默认值
    },
  },

  setup() {
    onMounted(() => {});
    return {};
  },
};
</script>
