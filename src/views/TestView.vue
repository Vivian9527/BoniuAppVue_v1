<template>
  我是hire~ 一點開招聘就發出去api
  {{ getjobData }}
</template>
<style scoped>
@import url("../../public/css/hire.css");
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
