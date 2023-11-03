<template>
   <div id="focusConBodyNews">
    <!-- 有關注 -->
    <div v-if="gethomeLocalBBSData">
      <div id="focusConBodyNews2" class="focusConBodyNews2" v-for="(item) in gethomeLocalBBSData" :key="item.tid">
        <div id="focusForumHaveContent">
          <div class="focusConBodyForum">
            <div class="ForumCon1">

              <router-link :to="{ name: 'author', params: { id: item.authorInfo.authorid } }"
                @click="$shareFunctions.getUserContent(item.authorInfo.authorid, 1)">
                <img :src="item.authorInfo.icon" class="forumHeadPic">
              </router-link>
              <div class="forumHeadName">{{ item.authorInfo.author }}</div>

              <span class="ml-auto" v-if="item.displayorder">置顶</span>
            </div>
            <div class="ForumCon2">
              <div>{{ item.subject }}</div>
              <router-link :to="{ name: 'article', params: { id: item.tid } }"
                @click="$shareFunctions.SentArticleApi(item.tid)">
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
                    <button class="discussion mt-2">
                    <img src="../../../public/img/circle_detail_post_comment_big.png">
                    <span>{{ item.category }}</span>
                  </button>
                  </router-link>
                

                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-4">
                      <button class="btn shareButton">
                        <img src="../../../public/img/circle_detail_post_share.png">
                        <span>分享</span>
                      </button>
                    </div>
                    <div class="col-4">
                      <router-link :to="{ name: 'article', params: { id: item.tid } }"
                        @click="$shareFunctions.SentArticleApi(item.tid)">
                        <button class="btn">
                          <img src="../../../public/img/circle_detail_post_comment_big.png">
                          <span>{{ item.replies }}</span>
                        </button>
                      </router-link>


                    </div>
                    <div class="col-4">
                      <button class="btn likeButton">
                        <img src="../../../public/img/ic_circle_detail_post_like_d.png">
                        <span>{{ item.favtimes }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <recommendFocus />
    </div>

    <!-- 沒有關注 -->
    <div v-else>
      <notFocus />
      <recommendFocus />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../public/css/index.css";
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LocalView_bbs",
  components: {},
  computed: {
    ...mapGetters("ws", ["gethomeLocalBBSData"]),
  },
  setup() {
    return {};
  },
};
</script>
