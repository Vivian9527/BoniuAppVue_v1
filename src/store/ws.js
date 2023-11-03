// store/ws.js
import { ref } from "vue";

const state = ref({
  wsRes: {},
  loginData: {}, // 新增一个状态用于存储发送的数据

  homePushFollowerData: {},
  homePushFollowBBSData: {},
  homePushFollowNEWSData: {},

  homeTuijianArticleData: {},
  articleData: {},
  homeTuijianJobData: {},
  homeTuijianBannerData: {},
  homeTuijianAdData: {},
  authorInfoData: {},
  movementData: {},
  photosData: {},
  fansData: {},
  followData: {},
  homeBusinessAData: {},
  homeBusinessBData: {},
  homeBusinessCData: {},
  homeBusinessDData: {},
  homeLocalBBSData: {},
  homeLocalNEWSData: {},
  RelatedThreadData: {},
  PlateData: {},
  AllPlateContentData: {},

  // FirmsAnswerData: {},
  // informationData: {},
  // FollowNewsData: {},
  // MyFavoriteData: {},
  // OfficialNewsData: {},

  // 朝聘
  jobData: {},
  newjobData: {},
  hire_bannerData: {},
  mansData: {},
  userFirmData: {},
  placeData: {},
  topPostData: {},
  otherData: {},
  newjobpostData: {},
  firmspostQueryData: {},
  job_typeAllData: {},
  job_jobcontentData: {},

  // 社區
  PlateIndexData: {},
  userPlateData: {},
  CommunityHotData: {},
  CommunityNewthreadData: {},
  CommunityAdoptionData: {},
  CommunityRandomData: {},
  CountryContentData: {},
  ArticleListData: {},

  // 我的
  userThreadData: {},
  group_member_info_queryData: {},
  group_member_infoData: {},
  taskData: {},
  FansData: {},
  FocusData: {},
  FavoriteData: {},
  extcreditsData: {},
  resumeData: {},
  deliveryData: {},
  interviewData: {},
  checkedData: {},
  ContactUsData: {},
  telephoneData: {},
  tgPlateData: {},
  userThreadContentData: {},
  ThreadRepliesData: {},
  MyFansData: {},
  FocusUserData: {},
  Favorite2Data: {},
  

  // 搜索
  SearchAllNewsData: {},
  SearchAllCommunityData: {},
  SearchAllUserData: {},
  SearchAllJobData: {},
  SearchAllFirmspostQueryData: {},
});

const getters = {
  getLogin: (state) => state.loginData,

  gethomePushFollowBBS: (state) => state.homePushFollowBBSData,
  gethomePushFollowNEWS: (state) => state.homePushFollowNEWSData,
  gethomePushFollower: (state) => state.homePushFollowerData,

  gethomeTuijianArticle: (state) => state.homeTuijianArticleData,
  getArticle: (state) => state.articleData,
  gethomeTuijianJob: (state) => state.homeTuijianJobData,
  gethomeTuijianBanner: (state) => state.homeTuijianBannerData,
  gethomeTuijianAd: (state) => state.homeTuijianAdData,

  getAuthorInfo: (state) => state.authorInfoData,
  getMovement: (state) => state.movementData,
  getPhotos: (state) => state.photosData,
  getFans: (state) => state.fansData,
  getFollow: (state) => state.followData,

  gethomeChoiceData: (state) => state.homeChoiceData,
  gethomeChoiceCategoryData: (state) => state.homeChoiceCategoryData,

  gethomeInformationArticleData: (state) => state.homeInformationArticleData,
  gethomeInformationData: (state) => state.homeInformationData,

  gethomeBusinessAData: (state) => state.homeBusinessAData,
  gethomeBusinessBData: (state) => state.homeBusinessBData,
  gethomeBusinessCData: (state) => state.homeBusinessCData,
  gethomeBusinessDData: (state) => state.homeBusinessDData,

  gethomeLocalNEWSData: (state) => state.homeLocalNEWSData,
  gethomeLocalBBSData: (state) => state.homeLocalBBSData,
  getRelatedThreadData: (state) => state.RelatedThreadData,

  getPlateData: (state) => state.PlateData,
  getAllPlateContentData: (state) => state.AllPlateContentData,

  // 朝聘
  getjobData: (state) => state.jobData,
  getnewjobData: (state) => state.newjobData,
  gethire_bannerData: (state) => state.hire_bannerData,
  getmansData: (state) => state.mansData,
  getuserFirmData: (state) => state.userFirmData,
  getplaceData: (state) => state.placeData,
  gettopPostData: (state) => state.topPostData,
  getotherData: (state) => state.otherData,
  getnewjobpostData: (state) => state.newjobpostData,
  getfirmspostQueryData: (state) => state.firmspostQueryData,
  getjob_typeAllData: (state) => state.job_typeAllData,
  getjob_jobcontentData: (state) => state.job_jobcontentData,

  // 社區
  getPlateIndexData: (state) => state.PlateIndexData,
  getuserPlateData: (state) => state.userPlateData,
  getCommunityHotData: (state) => state.CommunityHotData,
  getCommunityNewthreadData: (state) => state.CommunityNewthreadData,
  getCommunityAdoptionData: (state) => state.CommunityAdoptionData,
  getCommunityRandomData: (state) => state.CommunityRandomData,
  getCountryContentData: (state) => state.CountryContentData,
  getArticleListData: (state) => state.ArticleListData,

  //我的
  getuserThreadData: (state) => state.userThreadData,
  getGroup_member_info_queryData: (state) => state.group_member_info_queryData,
  getGroup_member_infoData: (state) => state.group_member_infoData,
  getTaskData: (state) => state.taskData,
  getFansData: (state) => state.FansData,
  getFocusData: (state) => state.FocusData,
  getFavoriteData: (state) => state.FavoriteData,
  getExtcreditsData: (state) => state.extcreditsData,
  getResumeData: (state) => state.resumeData,
  getDeliveryData: (state) => state.deliveryData,
  getInterviewData: (state) => state.interviewData,
  getCheckedData: (state) => state.checkedData,
  getContactUsData: (state) => state.ContactUsData,
  getTelephoneData: (state) => state.telephoneData,
  getTgPlateData: (state) => state.tgPlateData,
  getUserThreadContentData: (state) => state.userThreadContentData,
  getThreadRepliesData: (state) => state.ThreadRepliesData,
  getMyFansData: (state) => state.MyFansData,
  getFocusUserData: (state) => state.FocusUserData,
  getFavorite2Data: (state) => state.Favorite2Data,
  
  

  // 搜索
  getSearchAllNewsData: (state) => state.SearchAllNewsData,
  getSearchAllCommunityData: (state) => state.SearchAllCommunityData,
  getSearchAllUserData: (state) => state.SearchAllUserData,
  getSearchAllJobData: (state) => state.SearchAllJobData,
  getSearchAllFirmspostQueryData: (state) => state.SearchAllFirmspostQueryData,
};

const mutations = {
  //登入
  "ws/login"(state, payload) {
    // 将 state 作为第一个参数
    state.loginData = payload; // 注意：不要使用 state.value.getLogin
  },
  // 首頁-關注
  "ws/homePushFollowBBS"(state, payload) {
    state.homePushFollowBBSData = payload;
  },
  "ws/homePushFollowNEWS"(state, payload) {
    state.homePushFollowNEWSData = payload;
  },
  "ws/homePushFollower"(state, payload) {
    state.homePushFollowerData = payload;
  },
  // 首頁-推薦
  "ws/homeTuijianArticle"(state, payload) {
    state.homeTuijianArticleData = payload;
  },
  "ws/homeTuijianJob"(state, payload) {
    state.homeTuijianJobData = payload;
  },
  "ws/homeTuijianBanner"(state, payload) {
    state.homeTuijianBannerData = payload;
  },
  "ws/homeTuijianAd"(state, payload) {
    state.homeTuijianAdData = payload;
  },
  //首頁-資訊
  "ws/homeInformationArticle"(state, payload) {
    state.homeInformationArticleData = payload;
  },
  "ws/homeInformationAd"(state, payload) {
    state.homeInformationData = payload;
  },
  //首頁-精選
  "ws/homeChoice"(state, payload) {
    state.homeChoiceData = payload;
  },
  "ws/homeChoiceCategory"(state, payload) {
    state.homeChoiceCategoryData = payload;
  },
  //首頁-本地
  "ws/homeChoiceBBS"(state, payload) {
    state.homeLocalBBSData = payload;
  },
  "ws/homeChoiceNEWS"(state, payload) {
    state.homeLocalNEWSData = payload;
  },
  //首頁-商務
  "ws/homeBusinessA"(state, payload) {
    state.homeBusinessAData = payload;
  },
  "ws/homeBusinessB"(state, payload) {
    state.homeBusinessBData = payload;
  },
  "ws/homeBusinessC"(state, payload) {
    state.homeBusinessCData = payload;
  },
  "ws/homeBusinessD"(state, payload) {
    state.homeBusinessDData = payload;
  },
  // 文章內文
  "ws/article"(state, { tid, data }) {
    state.articleData[tid] = data;
  },
  "ws/RelatedThread"(state, payload) {
    state.RelatedThreadData = payload;
  },
  // 作者資訊
  "ws/authorInfo"(state, { authorId, data }) {
    state.authorInfoData[authorId] = data;
  },
  "ws/movement"(state, { authorId, data }) {
    state.movementData[authorId] = data;
  },
  "ws/photos"(state, { authorId, data }) {
    state.photosData[authorId] = data;
  },
  "ws/fans"(state, { authorId, data }) {
    state.fansData[authorId] = data;
  },
  "ws/follow"(state, { authorId, data }) {
    state.followData[authorId] = data;
  },
  //論壇
  "ws/Plate"(state, { fid, data }) {
    state.PlateData[fid] = data;
  },
  "ws/AllPlateContent"(state, payload) {
    state.AllPlateContentData = payload;
  },
  //通知
  "ws/FirmsAnswer"(state, payload) {
    state.FirmsAnswerData = payload;
  },
  "ws/information"(state, payload) {
    state.informationData = payload;
  },
  "ws/FollowNews"(state, payload) {
    state.FollowNewsData = payload;
  },
  "ws/MyFavorite"(state, payload) {
    state.MyFavoriteData = payload;
  },
  "ws/OfficialNews"(state, payload) {
    state.OfficialNewsData = payload;
  },
  //朝聘
  "ws/job"(state, payload) {
    state.jobData = payload;
  },
  "ws/newjob"(state, payload) {
    state.newjobData = payload;
  },
  "ws/hire_banner"(state, payload) {
    state.hire_bannerData = payload;
  },
  "ws/mans"(state, payload) {
    state.mansData = payload;
  },
  "ws/userFirm"(state, payload) {
    state.userFirmData = payload;
  },
  "ws/place"(state, payload) {
    state.placeData = payload;
  },
  "ws/topPost"(state, payload) {
    state.topPostData = payload;
  },
  "ws/other"(state, payload) {
    state.otherData = payload;
  },
  "ws/newjobpost"(state, payload) {
    state.newjobpostData = payload;
  },
  // "ws/firmspostQuery"(state, payload) {
  //   state.firmspostQueryData = payload;
  // },
  "ws/job_typeAll"(state, payload) {
    state.job_typeAllData = payload;
  },
  "ws/job_jobcontent"(state, payload) {
    state.job_jobcontentData = payload;
  },
  // 社區
  "ws/PlateIndex"(state, payload) {
    state.PlateIndexData = payload;
  },
  "ws/userPlate"(state, payload) {
    state.userPlateData = payload;
  },
  "ws/CommunityHot"(state, payload) {
    state.CommunityHotData = payload;
  },
  "ws/CommunityNewthread"(state, payload) {
    state.CommunityNewthreadData = payload;
  },
  "ws/CommunityAdoption"(state, payload) {
    state.CommunityAdoptionData = payload;
  },
  "ws/CommunityRandom"(state, payload) {
    state.CommunityRandomData = payload;
  },
  "ws/CountryContent"(state, payload) {
    state.CountryContentData = payload;
  },
  "ws/ArticleList"(state, payload) {
    state.ArticleListData = payload;
  },
  // 我的
  
  "ws/userThread"(state, payload) {
    state.userThreadData = payload;
  },
  
  "ws/group_member_info_query"(state, payload) {
    state.group_member_info_queryData = payload;
  },
  
  "ws/group_member_info"(state, payload) {
    state.group_member_infoData = payload;
  },
  
  "ws/task"(state, payload) {
    state.taskData = payload;
  },
  
  "ws/Fans"(state, payload) {
    state.FansData = payload;
  },
  
  "ws/Focus"(state, payload) {
    state.FocusData = payload;
  },
  
  "ws/Favorite"(state, payload) {
    state.FavoriteData = payload;
  },
  
  "ws/extcredits"(state, payload) {
    state.extcreditsData = payload;
  },
  
  "ws/resume"(state, payload) {
    state.resumeData = payload;
  },
  
  "ws/delivery"(state, payload) {
    state.deliveryData = payload;
  },
  
  "ws/interview"(state, payload) {
    state.interviewData = payload;
  },
  
  "ws/checked"(state, payload) {
    state.checkedData = payload;
  },
  
  "ws/ContactUs"(state, payload) {
    state.ContactUsData = payload;
  },
  "ws/telephone"(state, payload) {
    state.telephoneData = payload;
  },
  
  "ws/tgPlate"(state, payload) {
    state.tgPlateData = payload;
  },
  
  "ws/userThreadContent"(state, payload) {
    state.userThreadContentData = payload;
  },
  
  "ws/ThreadReplies"(state, payload) {
    state.ThreadRepliesData = payload;
  },
  
  "ws/MyFans"(state, payload) {
    state.MyFansData = payload;
  },
  
  "ws/FocusUser"(state, payload) {
    state.FocusUserData = payload;

  },
  
  "ws/Favorite2"(state, payload) {
    state.Favorite2Data = payload;
  },
  



  // 搜索
  "ws/News"(state, payload) {
    state.NewsData = payload;
  },
  "ws/Community"(state, payload) {
    state.CommunityData = payload;
  },
  "ws/User"(state, payload) {
    state.UserData = payload;
  },
  // "ws/job"(state, payload) {
  //   state.jobData = payload;
  // },
  // "ws/firmspostQuery"(state, payload) {
  //   state.firmspostQueryData = payload;
  // },
};

export default {
  namespaced: true, // 启用命名空间
  state,
  mutations,
  getters,
};
