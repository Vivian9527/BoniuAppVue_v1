<template>
  <div class="ProfileHeadContainer">
    <router-link :to="{ name: 'NotifiView' }">
      <img src="img/email.png" class="email-img"
    /></router-link>

    <btn class="btn btn-list custom-sharebtn profile-myhireBTNs" type="button">
      <img src="img/settings.png" class="setting-img" />
    </btn>
  </div>
  <div class="profile-name">
    <div class="profile-nameLeft">
      <img src="img/profilePic.jpg" class="profile-namePic" />
      <div class="profile-names">
        <div class="profile-namesText">{{ getLogin.username }}</div>
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-GrowthOfMine"
          aria-controls="offcanvasBottom"
        >
          <div class="profile-nameLevel">
            <img src="img/icon4.png" style="width: auto; height: 1rem" />
            <div class="profile-nameLevelText">
              LV{{ getGroup_member_info_queryData.level }}
            </div>
          </div>
        </btn>
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-profileIcon"
          aria-controls="offcanvasBottom"
        >
          <img src="img/icon4.png" class="profile-nameCenterPic" />
        </btn>
      </div>
    </div>

    <btn id="signInButton" class="profile-nameRight">簽到</btn>
  </div>
  <div class="profile-class">
    <router-link :to="{ name: 'profileRelease' }">
      <btn
        class="btn btn-list custom-sharebtn profile-myhireBTNs profile-classBTN"
        type="button"
      >
        <div class="profile-classNumber" id="MyPublishNum">
          {{ getuserThreadData2 }}
        </div>
        <div class="profile-classText">发布</div>
      </btn>
    </router-link>
    <div class="profile-classLine">｜</div>

    <router-link :to="{ name: 'ProfileViewFocus' }">
      <btn
        class="btn btn-list custom-sharebtn profile-myhireBTNs profile-classBTN"
        type="button"
      >
        <div class="profile-classNumber" id="MyFocusNum">
          {{ getFocusData2 }}
        </div>
        <div class="profile-classText">关注</div>
      </btn>
    </router-link>

    <div class="profile-classLine">｜</div>
    <router-link :to="{ name: 'ProfileViewFans' }">
      <btn
        class="btn btn-list custom-sharebtn profile-myhireBTNs profile-classBTN"
        type="button"
      >
        <div class="profile-classNumber" id="MyFansNum">
          {{ getFansData2 }}
        </div>
        <div class="profile-classText">粉丝</div>
      </btn>
    </router-link>
    <div class="profile-classLine">｜</div>
    <router-link :to="{ name: 'ProfileViewFavor' }">
      <btn
        class="btn btn-list custom-sharebtn profile-myhireBTNs profile-classBTN"
        type="button"
      >
        <div class="profile-classNumber" id="MyFavoriteNum">
          {{ getFavoriteData2 }}
        </div>
        <div class="profile-classText">收藏</div>
      </btn>
    </router-link>
  </div>
  <div class="profile-money">
    <div class="profile-moneyLeft">
      <div class="profile-moneyLeftText">新博币明细</div>
      <div class="profile-moneyLeftCoin">
        <div class="profile-moneyLeftCoinText" id="MyCoinNum">
          {{ getExtcreditsData2 }}
        </div>
        <img src="img/coin.png" />
      </div>
    </div>
    <router-link :to="{ name: 'ProfileViewXinBoBi' }">
      <button type="button" class="text-reset custom-backbtn">
        <div class="profile-moneyRight">
          <btn class="btn btn-list custom-sharebtn profile-myhireBTNs">
            <div class="profile-moneyRightText">提现</div>
          </btn>
        </div>
      </button></router-link
    >
  </div>
  <div class="profile-myhire">
    <div class="profile-myhireTitle">我的求职</div>
    <div class="profile-myhireBTN">
      <router-link :to="{ name: 'ProfileViewMyCv' }">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          id="MyPageCVBt"
        >
          <img src="img/file.png" />
          <div class="profile-myhireBTNsText">我的简历</div>
        </btn>
      </router-link>
      <router-link :to="{ name: 'ProfileViewDelivery' }">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
        >
          <img src="img/history.png" />
          <div class="profile-myhireBTNsText">投递记录</div>
        </btn>
      </router-link>
      <router-link :to="{ name: 'ProfileViewWhoSee' }">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
        >
          <img src="img/find.png" />
          <div class="profile-myhireBTNsText">谁看了我</div>
        </btn>
      </router-link>
      <router-link :to="{ name: 'ProfileViewInterview' }">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
          id="MyPageInterviewBt"
        >
          <img src="img/mail.png" />
          <div class="profile-myhireBTNsText">面试邀请</div>
        </btn>
      </router-link>
    </div>
  </div>
  <!--其他功能-->
  <div class="profile-myhire">
    <div class="profile-myhireTitle">其他功能</div>
    <div class="profile-myhireBTN">
      <router-link :to="{ name: 'ProfileViewCompany' }">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs profile-classBTN"
          type="button"
        >
          <btn
            class="btn btn-list custom-sharebtn profile-myhireBTNs"
            type="button"
          >
            <img src="img/house.png" />
            <div class="profile-myhireBTNsText">企业入驻</div>
          </btn>
        </btn>
      </router-link>
      <router-link
        v-if="getTelephoneData && typeof getTelephoneData === 'string'"
        :to="{
          name: 'article',
          params: { id: getTelephoneData.match(/tid=([0-9]+)/)[1] },
        }"
        @click="
          $shareFunctions.SentArticleApi(
            getTelephoneData.match(/tid=([0-9]+)/)[1]
          )
        "
      >
        <btn
          id="showMyPageTelephone"
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
        >
          <img src="img/telephone.png" />
          <div class="profile-myhireBTNsText">便民电话</div>
        </btn>
      </router-link>
      <router-link :to="{ name: 'ProfileViewContact' }">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
        >
          <img src="img/telephone2.png" />
          <div class="profile-myhireBTNsText" id="ContactUsBt">联系我们</div>
        </btn>
      </router-link>
      <router-link :to="{ name: 'ProfileViewInterest' }">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
        >
          <img src="img/universe.png" />
          <div class="profile-myhireBTNsText">兴趣群</div>
        </btn>
      </router-link>
    </div>
  </div>
  <van-tabs v-model:active="active">
    <van-tab title="新手任务">
      <div
        class="tab-pane fade show active profile-missionTabContainer"
        id="Mynewbie"
        role="tabpanel"
        aria-labelledby="Mynewbie-tab"
      >
        <div
          class="profile-mission"
          v-for="item in getTaskDataTab1"
          :key="item.id"
        >
          <div class="profile-missionLeft">
            <img :src="item.logo" />
            <div class="profile-missionText">
              <div class="profile-missionTextTitle">
                {{ item.title }}
              </div>
              <div class="profile-missionTextTitle2">
                {{ item.subtitle }}
              </div>
            </div>

            <div class="profile-missionAward">
              <div v-if="item.types && item.types[0] === 0">
                <img src="img/EXP.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
              <div v-if="item.types && item.types[1] === 1">
                <img src="img/coin.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
              <div v-if="item.types && item.types[2] === 2">
                <img src="img/c123.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
            </div>
          </div>
          <div class="profile-missionBTN">去完成</div>
        </div>
      </div>
    </van-tab>
    <van-tab title="日常任务">
      <div
        class="tab-pane fade show active profile-missionTabContainer"
        id="Mynewbie"
        role="tabpanel"
        aria-labelledby="Mynewbie-tab"
      >
        <div
          class="profile-mission"
          v-for="item in getTaskDataTab2"
          :key="item.id"
        >
          <div class="profile-missionLeft">
            <img :src="item.logo" />
            <div class="profile-missionText">
              <div class="profile-missionTextTitle">
                {{ item.title }}
              </div>
              <div class="profile-missionTextTitle2">
                {{ item.subtitle }}
              </div>
            </div>
            <div class="profile-missionAward">
              <div v-if="item.types && item.types[0] === 0">
                <img src="img/EXP.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
              <div v-if="item.types && item.types[1] === 1">
                <img src="img/coin.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
              <div v-if="item.types && item.types[2] === 2">
                <img src="img/c123.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
            </div>
          </div>
          <div class="profile-missionBTN">去完成</div>
        </div>
      </div>
    </van-tab>
    <van-tab title="进阶任务">
      <div
        class="tab-pane fade show active profile-missionTabContainer"
        id="Mynewbie"
        role="tabpanel"
        aria-labelledby="Mynewbie-tab"
      >
        <div
          class="profile-mission"
          v-for="item in getTaskDataTab3"
          :key="item.id"
        >
          <div class="profile-missionLeft">
            <img :src="item.logo" />
            <div class="profile-missionText">
              <div class="profile-missionTextTitle">
                {{ item.title }}
              </div>
              <div class="profile-missionTextTitle2">
                {{ item.subtitle }}
              </div>
            </div>
            <div class="profile-missionAward">
              <div v-if="item.types && item.types[0] === 0">
                <img src="img/EXP.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
              <div v-if="item.types && item.types[1] === 1">
                <img src="img/coin.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
              <div v-if="item.types && item.types[2] === 2">
                <img src="img/c123.png" />
                <div class="profile-missionAwardText">
                  +{{ item.values && item.values[0] }}
                </div>
              </div>
            </div>
          </div>
          <div class="profile-missionBTN" v-if="item.status == 0">去完成</div>
          <div class="profile-missionBTN" v-else-if="item.status == 1">
            領取獎勵
          </div>
          <div class="profile-missionBTN" v-else>已完成</div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>
<style scoped>
@import url("../../../public/css/profile.css");
</style>
<script>
import * as profileFun from "@/utils/profileFun"; // 确保路径正确
import { onMounted } from "vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("ws", [
      "getLogin",
      "getuserThreadData",
      "getGroup_member_info_queryData",
      "getGroup_member_infoData",
      "getTaskData",
      "getFansData",
      "getFocusData",
      "getFavoriteData",
      "getExtcreditsData",
      "getResumeData",
      "getDeliveryData",
      "getInterviewData",
      "getCheckedData",
      "getContactUsData",
      "getTelephoneData",
      "getTgPlateData",
      "getUserThreadContentData",
      "getThreadRepliesData",
      "getMyFansData",
      "getFocusUserData",
      "getFavorite2Data",
    ]),
    getTaskDataTab1() {
      const tabName = "新手任务";
      const filteredData = [];
      for (const key in this.getTaskData) {
        if (
          Object.prototype.hasOwnProperty.call(this.getTaskData, key) &&
          this.getTaskData[key].name === tabName
        ) {
          filteredData.push(this.getTaskData[key]);
        }
      }

      return filteredData;
    },
    getTaskDataTab2() {
      const tabName = "日常任务";
      const filteredData = [];
      for (const key in this.getTaskData) {
        if (
          Object.prototype.hasOwnProperty.call(this.getTaskData, key) &&
          this.getTaskData[key].name === tabName
        ) {
          filteredData.push(this.getTaskData[key]);
        }
      }

      return filteredData;
    },
    getTaskDataTab3() {
      const tabName = "进阶任务";
      const filteredData = [];
      for (const key in this.getTaskData) {
        if (
          Object.prototype.hasOwnProperty.call(this.getTaskData, key) &&
          this.getTaskData[key].name === tabName
        ) {
          filteredData.push(this.getTaskData[key]);
        }
      }

      return filteredData;
    },
    getuserThreadData2() {
      if (this.getuserThreadData.length > 0) {
        return this.getuserThreadData[0].total;
      }
      return 0; // 或其他默认值
    },
    getFocusData2() {
      if (this.getFocusData.length > 0) {
        return this.getFocusData[0].total;
      }
      return 0; // 或其他默认值
    },
    getFansData2() {
      if (this.getFansData.length > 0) {
        return this.getFansData[0].follower;
      }
      return 0; // 或其他默认值
    },
    getFavoriteData2() {
      if (this.getFavoriteData.length > 0) {
        return this.getFavoriteData[0].total;
      }
      return 0; // 或其他默认值
    },
    getExtcreditsData2() {
      if (this.getExtcreditsData.length > 0) {
        return this.getExtcreditsData[0].extcredits3;
      }
      return 0; // 或其他默认值
    },
  },

  setup() {
    onMounted(() => {
      profileFun.getUserthread();
      profileFun.getGroupmemberinfo();
      profileFun.getMedalinfo();
      profileFun.getTask();
      profileFun.getFans();
      profileFun.getFocus();
      profileFun.getFavorite();
      profileFun.getExtcredits();

      profileFun.getResume();
      profileFun.getDelivery();
      profileFun.getInterview();

      // profileFun.getChecked();
      profileFun.getUserOther();
      profileFun.getUserthreadconent();
      profileFun.getThreadreplies();
      // profileFun.postCreatResume();
    });
    return {};
  },
};
</script>
