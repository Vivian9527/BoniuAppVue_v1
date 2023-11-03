<template>
  <div class="head">
    <router-link :to="{ name: 'hire' }">
      <a class="btn btn-secondary custom-backbtn closeOffcanvasBtn">
        <img src="img/back icon.png" class="header-img1" /> </a
    ></router-link>
    <div style="font-weight: bold; margin-left: 1.2rem">找企业</div>
    <btn
      class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button"
      style="font-size: 1.1rem"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvas-CountriesOfCompany"
      aria-controls="offcanvasBottom"
      >筛选</btn
    >
  </div>

  <div class="searchbarContainer">
    <!-- <a href="findCompanyID.html" class="searchbar" id="findCompanyBt"> -->
    <a class="searchbar" id="findCompanyBt">
      <img src="img/find.png" style="width: 1.5rem" />
      <input type="text" placeholder="请输入该员工用户名或ID" />
    </a>
  </div>
  <div class="company-list" id="findCompanyMainCon">
    <div v-for="item in getuserFirmData" :key="item.id">
      <div class="header">
        <div class="title">
          <div class="image-container">
            <img :src="item.logo" alt="Your Image" />
          </div>
        </div>
        <div class="name">
          <div style="margin-bottom: 0.3rem">{{ item.name }}</div>
        </div>
      </div>
      <div class="location">
        <div>{{ item.country }}</div>
        <div>｜</div>
        <div>{{ item.scale }}</div>
      </div>
      <!-- BananaFish沒有下面的ＡＰＩ -->
      <div class="job">热招职位 ：其他岗位等1个职位</div>
      <hr />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url("../../../public/css/findCompany.css");
</style>
<script>
import * as hireFun from "@/utils/hireFun"; // 确保路径正确
import { onMounted } from "vue";
import { mapGetters } from "vuex";

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
  props: {
    route: Object,
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
      //   hireFun.getHirebanner();
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
