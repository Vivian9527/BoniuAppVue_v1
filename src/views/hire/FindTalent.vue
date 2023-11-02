<template>
  <!--header-->
  <div class="zpheader">
    <router-link :to="{ name: 'hire' }">
      <a class="btn btn-secondary custom-backbtn closeOffcanvasBtn">
        <img src="img/back icon.png" class="header-img1" /> </a
    ></router-link>

    <div class="header-title">找人才</div>
    <button
      type="button"
      class="custom-zpbtn"
      data-bs-toggle="modal"
      data-bs-target="#zpmodal"
    >
      发布招聘
    </button>
  </div>

  <!--Searchbar-->
  <div class="searchbar">
    <a style="text-decoration: none">
      <img src="img/find.png" style="width: 1.5rem" />
      <input type="text" placeholder="请输入该员工用户名或ID" />
    </a>
  </div>

  <!--四格選項-->
  <div class="dropdown findTalentDropdowns">
    <btn
      class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button custom-dropdown-toggle"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvas-RegionOfTalents"
      aria-controls="offcanvasBottom"
      id="selectedRegion"
    >
      区域
      <img
        src="img/downarrow.png"
        style="width: auto; height: 1rem; margin-top: -0.6rem"
      />
    </btn>
    <btn
      class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button custom-dropdown-toggle"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvas-JobOfTalents"
      aria-controls="offcanvasTop"
      id="jobButton"
    >
      职位
      <img
        src="img/downarrow.png"
        style="width: auto; height: 1rem; margin-top: -0.6rem"
      />
    </btn>
    <btn
      class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button custom-dropdown-toggle"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvas-ExperienceOfTalents"
      aria-controls="offcanvasBottom"
      id="selectedExperience"
    >
      工作经验
      <img
        src="img/downarrow.png"
        style="width: auto; height: 1rem; margin-top: -0.6rem"
      />
    </btn>
    <btn
      class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button filter"
      style="font-size: 1.1rem; color: blue"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvas-SelectionOfTalents"
      aria-controls="offcanvasBottom"
    >
      筛选
    </btn>
  </div>

  <!-- BananaFish路由還沒改 -->
  <div class="employee-list" id="findTalentMainCon">
    <router-link
      v-for="item in getmansData"
      :key="item.id"
      :to="{ name: 'author', params: { id: item.id } }"
      @click="$shareFunctions.getUserContent(item.id)"
    >
      <div class="employee-lists" v-for="item in getmansData" :key="item.id">
        <div class="header">
          <div class="title">
            <div class="image-container">
              <img :src="item.photo_url" alt="Your Image" />
            </div>
          </div>
          <div class="name">
            <div style="margin-bottom: 0.3rem">{{ item.name }}</div>
            <div class="salary">
              <span class="blue-text">{{
                $otherToolFunction.changeTime(item.update_time)
              }}</span>
            </div>
          </div>
        </div>
        <div class="experience">
          <div>{{ item.position_name }}</div>
          <div>｜</div>
          <div>期望薪资：{{ item.hope_salary }}</div>
        </div>
        <div class="requirements">
          <div class="requirement" v-if="item.gender">女</div>
          <div class="requirement" v-else>男</div>
          <div class="requirement">{{ item.education }}</div>
          <div class="requirement">{{ item.experience }}</div>
          <div class="requirement">意象地：{{ item.country }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
@import url("../../../public/css/findTalent.css");
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
