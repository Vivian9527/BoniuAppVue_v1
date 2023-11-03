<template>
  <!-- 輪播圖 -->
  <adSwipe />
  <!--熱門崗位-->
  <div id="jobDiv">
    <div class="row">
      <span id="jobText" class="col-9">热门岗位</span>
      <button id="jobbt" class="col-3">更多 ></button>
    </div>
    <div class="jobDivSon1" v-if="gethomeTuijianJob">
      <div class="jobDivSon2">
        <div class="BigjobTagContainer">
          <div class="jobTagContainer" v-for="item in gethomeTuijianJob" :key="item.id">
            <div class="jobTag">
              <img src="img/hoticon3.png" alt="熱朝">
            </div>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div id="adFollowCon" v-if="gethomeTuijianAd">
      <!--叉叉按鈕-->
      <img id="adfollowcancel" src="img/popad_close.png">
      <!--點擊圖片連結-->
      <a v-if="randomAd" :href="randomAd.url" target="_blank">
        <img id="adfollow" :src="randomAd.pic">
      </a>
    </div>
  </div>
  <hr id="adHr">
  <!-- 主要文章 -->
  <div id="indexAuthorCon" class="clickLikeBt" v-if="gethomeTuijianArticle && gethomeTuijianArticle.length > 0">
    <div class="authorInfoFa" v-for="(item) in gethomeTuijianArticle" :key="item.tid">
      <div class="authorInfo">
        <router-link :to="{ name: 'author', params: { id: item.authorInfo.authorid } }" @click="$shareFunctions.getUserContent(item.authorInfo.authorid,1)">
          <img class="authorImg" :src="item.authorInfo.icon" alt="item.authorInfo.icon">
        </router-link>
        <div class="authorText">
          <div class="authorName">{{ item.authorInfo.author }}</div>
          <div class="authorIdentity">{{ item.authorInfo.grouptitle }}</div>
        </div>
        <img class="authorTag" :src="item.authorInfo.medalsStar.logo">
        <span class="authorLevel"
          :style="{ backgroundImage: 'url(' + item.authorInfo.medalsStar.logo_tail + ')' }">{{
            item.authorInfo.medalsStar.count }}
            </span>
      </div>

      <div class="articleContent"><span class="contentSpan">{{ item.subject }}</span>
        <router-link :to="{ name: 'article', params: { id: item.tid } }" @click="$shareFunctions.SentArticleApi(item.tid)">
          <span class="viewMore">...查看全文</span>
        </router-link>

        <div class="imgsCons albumGrid" v-if="item.imgList.length > 0">
          <template v-if="item.imgList.length === 1">
            <div class="albumDivGrandson">
              <img :src="item.imgList[0]" alt="Image 1">
            </div>
          </template>
          <template v-else>
            <template v-for="(pic, picIndex) in item.imgList.slice(0, 9)" :key="picIndex">
              <div class="albumDivGrandson">
                <img :src="pic" alt="Image 1">
              </div>
            </template>
          </template>
        </div>
      </div>
      <div class="shareCon">
        <div class="row">
          <div class="col-6">
            <router-link :to="{ name: 'forum', params: { id: item.fid } }" @click="$shareFunctions.getAllPlateContent(item.fid,'tuijian',1)">
              <button class="discussion mt-2" tabindex="0" :key="item.fid" >
              <img src="img/circle_detail_post_comment_big.png">
              <span>綜合討論區</span>
            </button>
          </router-link>
            
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-4">
                <button class="btn shareButton" tabindex="0">
                  <img src="img/circle_detail_post_share.png">
                  <span>分享</span>
                </button>
              </div>
              <div class="col-4">
                <button class="btn communityForumBt" tabindex="0">
                  <img src="img/circle_detail_post_comment_big.png">
                  <span>{{ item.replies }}</span>
                </button>
              </div>
              <div class="col-4">
                <button class="btn likeButton" tabindex="0">
                  <img src="img/ic_circle_detail_post_like_d.png">
                  <span>{{ item.favtimes }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../public/css/index.css';
</style>
<script>

import { mapGetters } from "vuex";
import adSwipe from "../../components/adSwipe.vue";

export default {
  name: "RecommendView",
  components: {
    adSwipe
  },
  computed: {
    ...mapGetters("ws", ["gethomeTuijianArticle", "gethomeTuijianJob", "gethomeTuijianAd"]),

    randomAd() {
      const ads = this.gethomeTuijianAd;
      if (ads.length === 0) {
        return {}; // 或者其他默认值
      }
      const randomIndex = Math.floor(Math.random() * ads.length);
      return ads[randomIndex];
    },
  },
  setup() {
   

    return {

    }
  }

};
</script>