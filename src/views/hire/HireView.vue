<template>
  <SearchBar />
  <adSwiperHire />
  <br /><br /><br /><br />
  <router-link :to="{ name: 'findTalent' }">
    <a class="button" id="FindTalent">
      <div class="centered-text">
        <div class="FindTalent">找人才</div>
        <div class="FindTalentD">17362份牛人简历</div>
      </div>
    </a>
  </router-link>

  <router-link :to="{ name: 'findCompany' }">
    <a class="button" id="FindBusinesses">
      <div class="centered-text">
        <div class="FindTalent">企业库</div>
        <div class="FindTalentD">2405家优质名企</div>
      </div>
    </a>
  </router-link>

  <!--選項卡內容-->
  <van-tabs v-model:active="active">
    <van-tab title="熱門">
      <div>
        <!-- BananaFish:路由還沒改 -->
        <router-link
          v-for="item in getjobData"
          :key="item.id"
          :to="{ name: 'author', params: { id: item.id } }"
          @click="$shareFunctions.getUserContent(item.id)"
        >
          <div class="job-card">
            <div class="header">
              <div class="title">
                <img
                  v-if="item.is_top"
                  src="img/urgency.png"
                  alt="Your Image"
                  class="image-icon"
                />
                {{ item.title }}
              </div>
              <div class="salary">
                <span class="blue-text">{{ item.salary }}</span>
              </div>
            </div>
            <div class="requirements">
              <div
                class="requirement"
                v-if="item.experience && item.experience != ''"
              >
                {{ item.experience }}
              </div>
              <div
                class="requirement"
                v-if="item.education && item.education != ''"
              >
                {{ item.education }}
              </div>
              <div class="requirement" v-if="item.count && item.count != ''">
                {{ item.count }}
              </div>
              <div class="requirement" v-if="item.work_home">可遠程辦公</div>
            </div>
            <div class="company">
              <div class="company-info">
                <img :src="item.logo" alt="公司图片" />
                <div class="company-name">
                  {{ item.creator }}<span>·{{ item.scale }}</span>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div></van-tab
    >
    <van-tab title="最新">
      <!-- BananaFish:路由還沒改 沒有is_top API -->
      <div>
        <router-link
          v-for="item in getnewjobData"
          :key="item.id"
          :to="{ name: 'author', params: { id: item.id } }"
          @click="$shareFunctions.getUserContent(item.id)"
        >
          <div class="job-card">
            <div class="header">
              <div class="title">
                <img
                  v-if="item.is_top"
                  src="img/urgency.png"
                  alt="Your Image"
                  class="image-icon"
                />
                {{ item.title }}
              </div>
              <div class="salary">
                <span class="blue-text">{{ item.salary }}</span>
              </div>
            </div>
            <div class="requirements">
              <div
                class="requirement"
                v-if="item.experience && item.experience != ''"
              >
                {{ item.experience }}
              </div>
              <div
                class="requirement"
                v-if="item.education && item.education != ''"
              >
                {{ item.education }}
              </div>
              <div class="requirement" v-if="item.count && item.count != ''">
                {{ item.count }}
              </div>
              <div class="requirement" v-if="item.work_home">可遠程辦公</div>
            </div>
            <div class="company">
              <div class="company-info">
                <!-- BnanaFish沒有公司圖片 -->
                <img :src="item.logo" alt="公司图片" />
                <div class="company-name">
                  {{ item.creator }}<span>·{{ item.scale }}</span>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div></van-tab
    >
  </van-tabs>
</template>
<style lang="scss" scoped>
@import url("../../../public/css/hire.css");
</style>
<script>
import * as hireFun from "@/utils/hireFun"; // 确保路径正确
import { onMounted } from "vue";
import { mapGetters } from "vuex";
import adSwiperHire from "@/components/adSwiperHire.vue";
import searchBar from "@/components/searchBar.vue";

export default {
  computed: {
    ...mapGetters("ws", [
      "getjobData",
      "getnewjobData",
      "gethire_bannerData",
      "getmansData",
      "getuserFirmData",
      "getplaceData",
      "gettopPostData",
      "getotherData",
      "getnewjobpostData",
      "getfirmspostQueryData",
      "getjob_typeAllData",
      "getjob_jobcontentData",
    ]),
  },
  components: {
    adSwiperHire,
    searchBar,
  },
  setup() {
    // var where = {
    //   country: "菲律賓", //國家
    // country: "jobLocation1", //國家
    // city: jobLocation2, //城市
    // salary: salaryData, //薪水
    // experience: experienceData, //經驗
    // education: EducationData, //教育
    // welfare: BenefitsData, //福利
    // hope_country: NationalityData, //期許地
    // gender: GenderData, //性別
    // work_home: WorkMethodData, //工作模式
    // };

    onMounted(() => {
      hireFun.getMans(); //朝聘-找人才
      //   hireFun.getManspost();
      //   hireFun.getMansresume();
      hireFun.getFirms(); //朝聘-找企業
      //   hireFun.getFirmspost();
      //   hireFun.getFirmall();
      hireFun.getJob(); //朝聘-熱門
      //   hireFun.getJobpost();
      hireFun.getNewjob(); //朝聘-最新
      //   hireFun.getNewjobpost(where, 0);
      //   hireFun.getJobtype();
      //   hireFun.getJobposition();
      //   hireFun.getJobcontent();
      hireFun.getHirebanner();
      //   hireFun.getGetsalary();
      //   hireFun.getGetdegree();
      //   hireFun.getGetWorkExperience();
      //   hireFun.getGetCitizenship();
      //   hireFun.getGetwelfare();
      //   hireFun.getGetplace();
    });

    return {};
  },
};
</script>
