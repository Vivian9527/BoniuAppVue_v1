<template>
  <div>
    <div class="offcanvas-header profile-TGGroupHeader">
      <router-link :to="{ name: 'profile' }">
        <button type="button" class="text-reset custom-backbtn">
          <img src="img/back icon.png" /></button
      ></router-link>
      <div class="profile-TGGroupTitle">TG兴趣群</div>
    </div>
    <div class="offcanvas-body profile-TGGroupBody" id="profile-TGGroupBody">
      <div class="profile-TGGroupOfficial">
        <div class="profile-TGGroupOfficialTitle">
          {{ getTgPlateData1.name }}
        </div>
        <div class="profile-TGGroupOfficialBTN">
          <a
            :href="item.url"
            target="_blank"
            class="profile-TGGroupOfficialBTNs"
            :key="item.id"
            v-for="item in getTgPlateData1.Option"
          >
            <img :src="item.logoUrl" />
            <div>{{ item.shortName }}</div>
          </a>
        </div>
      </div>

      <div class="profile-TGGroupOfficial">
        <div class="profile-TGGroupOfficial">
          <div class="profile-TGGroupOfficialTitle">
            {{ getTgPlateData2.name }}
          </div>
          <div class="profile-TGGroupOfficialBTN">
            <a
              :href="item.url"
              target="_blank"
              class="profile-TGGroupOfficialBTNs"
              v-for="item in getTgPlateData2.Option"
              :key="item.id"
            >
              <img :src="item.logoUrl" />
              <div>{{ item.shortName }}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="profile-TGGroupOfficial">
        <div class="profile-TGGroupOfficial">
          <div class="profile-TGGroupOfficialTitle">
            {{ getTgPlateData3.name }}
          </div>
          <div class="profile-TGGroupOfficialBTN">
            <a
              :href="item.url"
              target="_blank"
              class="profile-TGGroupOfficialBTNs"
              v-for="item in getTgPlateData3.Option"
              :key="item.id"
            >
              <img :src="item.logoUrl" />
              <div>{{ item.shortName }}</div>
            </a>
          </div>
        </div>
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
    ...mapGetters("ws", ["getTgPlateData"]),
    getTgPlateData1() {
      if (this.getTgPlateData) {
        return this.getTgPlateData[0];
      }
      return 0; // 或其他默认值
    },
    getTgPlateData2() {
      if (this.getTgPlateData) {
        return this.getTgPlateData[1];
      }
      return 0; // 或其他默认值
    },
    getTgPlateData3() {
      if (this.getTgPlateData) {
        return this.getTgPlateData[2];
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
