<template>
  <!-- 社區、菲律賓标签 -->
  <ul class="nav nav-tabs tab-nav border-0" id="myTabs" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active tab-link custom-btn"
        id="tab1-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab1"
        type="button"
        role="tab"
        aria-controls="tab1"
        aria-selected="true"
      >
        社区
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link tab-link custom-btn"
        id="tab2-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab2"
        type="button"
        role="tab"
        aria-controls="tab2"
        aria-selected="false"
      >
        菲律宾
      </button>
    </li>
  </ul>

  <div class="tab-content-container tab-content tab-content-container">
    <div
      id="tab1"
      class="tab-pane fade show active tab-content"
      role="tabpanel"
      aria-labelledby="tab1-tab"
    >
      <div class="section">
        <btn
          class="btn btn-list custom-sharebtn profile-myhireBTNs"
          type="button"
        >
          <div class="sections">
            <div>
              <img src="img/all.png" />
            </div>
            <div class="sections-title">全部板块</div>
          </div>
        </btn>

        <div id="CommunitySectionsCon" class="section">
          <router-link
            :to="{ name: 'forum', params: { id: item.bbs_fid } }"
            @click="
              $shareFunctions.getAllPlateContent(item.bbs_fid, 'tuijian', 1)
            "
            v-for="item in getPlateIndexData"
            :key="item.bbs_fid"
          >
            <div class="sections">
              <div>
                <img :src="item.logoUrl" />
                <div class="seen">看过</div>
              </div>
              <div class="sections-title">{{ item.name }}</div>
            </div>
          </router-link>
        </div>
      </div>
      <router-link :to="{ name: 'article', params: { id: getCommunityRandomData.tid } }"
        @click="$shareFunctions.SentArticleApi(getCommunityRandomData.tid)"
      >
        <a class="box-containerLink">
          <div class="box-container">
            <div class="box-shadow">
              <div class="column-left">
                <div class="title">
                  <span class="view"
                    >最近{{ getCommunityRandomData.views }}人看过．
                    {{ getCommunityRandomData.replies }}个回答</span
                  >
                  <span class="titles">{{
                    getCommunityRandomData.subject
                  }}</span>
                </div>
                <div class="author">
                  <div class="circle-image">
                    BananaFish:沒有頭像
                    <img src="img/profilePic.jpg" />
                  </div>
                  <div class="authors">{{ getCommunityRandomData.author }}</div>
                </div>
              </div>
              <div class="column-right">
                <btn>
                  <img src="img/Refresh_icon.png" class="refresh" />
                </btn>
                <div class="answer">
                  <img src="img/write.png" style="height: 1rem; width: 1rem" />
                  <div class="answers">我來回答</div>
                </div>
              </div>
            </div>
            <div class="overlay"></div>
          </div>
        </a>
      </router-link>

      <div class="main">
        <!--任務清單tab-->
        <div class="container profile-missionContainer">
          <van-tabs v-model:active="active" shrink>
            <van-tab>
              <template v-slot:title>
                <span :class="{ 'custom-tab-button3': active === 0 }"
                  >熱門</span
                >
              </template>
              <div style="height: 100%; overflow: auto">
                <div
                  class="tab-pane fade show active profile-missionTabContainer"
                  id="newbie"
                  role="tabpanel"
                  aria-labelledby="newbie-tab"
                  style="width: 100%"
                >
                   

                  <div
                    class="authorCon"
                    v-for="item in getCommunityHotData"
                    :key="item.tid"
                  >
                    <div class="authorInfo">
                      <router-link
                        :to="{ name: 'author', params: { id: item.authorid } }"
                        @click="
                          $shareFunctions.getUserContent(item.authorid, 1)
                        "
                      >
                        <img class="authorImg" :src="item.authoricon" />
                      </router-link>

                      <div class="authorText">
                        <div class="authorName">{{ item.authorid }}</div>
                        BananaFish:無api
                        <div class="authorIdentity">版主</div>
                      </div>
                      <button
                        class="btn btn-list custom-Commenticonbtn"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas-icon"
                        aria-controls="offcanvasRight"
                        data-bs-backdrop="true"
                      >
                        <img :src="item.medals_logo" class="author-icon" />
                        <span
                          class="icon-level"
                          :style="{
                            backgroundImage:
                              'url(' +
                              item.medals_logo_tail +
                              ')',
                          }"
                          >{{ item.medals_count }}</span
                        >
                      </button>
                    </div>
                    <div class="articleContent">
                      <span>
                        {{ item.subject }}
                      </span>
                      <router-link
                        :to="{ name: 'article', params: { id: item.tid } }"
                        @click="$shareFunctions.SentArticleApi(item.tid)"
                      >
                        <span class="viewMore">...查看全文</span>
                      </router-link>
                      <div
                        class="imgsCons albumGrid"
                        v-if="item.imgList.length > 0"
                      >
                        <template v-if="item.imgList.length === 1">
                          <div class="albumDivGrandson">
                            <img :src="item.imgList[0]" alt="Image 1" />
                          </div>
                        </template>
                        <template v-else>
                          <template
                            v-for="(pic, picIndex) in item.imgList.slice(0, 9)"
                            :key="picIndex"
                          >
                            <div class="albumDivGrandson">
                              <img :src="pic" alt="Image 1" />
                            </div>
                          </template>
                        </template>
                      </div>
                    </div>
                    <div class="shareCon">
                      <div class="row">
                        <div class="col-6">
                          <router-link
                            :to="{ name: 'forum', params: { id: item.fid } }"
                            @click="
                              $shareFunctions.getAllPlateContent(
                                item.fid,
                                'tuijian',
                                1
                              )
                            "
                          >
                            <button class="discussion mt-2">
                              <img
                                src="img/circle_detail_post_comment_big.png"
                              />
                              <span>{{ item.name }}</span>
                            </button>
                          </router-link>
                        </div>
                        <div class="col-6">
                          <div class="row">
                            <div class="col-4">
                              <button
                                class="btn btn-list shareButton"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas-share"
                                aria-controls="offcanvasBottom"
                              >
                                <img src="img/circle_detail_post_share.png" />
                                <span>分享</span>
                              </button>
                            </div>
                            <div class="col-4">
                              <a href="article.html">
                                <button class="btn">
                                  <img
                                    src="img/circle_detail_post_comment_big.png"
                                  />
                                  <span>{{ item.replies }}</span>
                                </button>
                              </a>
                            </div>
                            <div class="col-4">
                              <button class="btn likeButton">
                                <img
                                  src="img/ic_circle_detail_post_like_d.png"
                                  class="likeImage"
                                />
                                <span class="likeCount">{{
                                  item.favtimes
                                }}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab>
              <template v-slot:title>
                <span :class="{ 'custom-tab-button3': active === 1 }"
                  >最新</span
                >
              </template>
              <div style="height: 100%; overflow: auto">
                <div
                  class="tab-pane fade show active profile-missionTabContainer"
                  id="newbie"
                  role="tabpanel"
                  aria-labelledby="newbie-tab"
                  style="width: 100%"
                >
                   

                  <div
                    class="authorCon"
                    v-for="item in getCommunityNewthreadData"
                    :key="item.tid"
                  >
                    <div class="authorInfo">
                      <router-link
                        :to="{ name: 'author', params: { id: item.authorid } }"
                        @click="
                          $shareFunctions.getUserContent(item.authorid, 1)
                        "
                      >
                        <img class="authorImg" :src="item.authoricon" />
                      </router-link>

                      <div class="authorText">
                        <div class="authorName">{{ item.authorid }}</div>
                        BananaFish:無api
                        <div class="authorIdentity">版主</div>
                      </div>
                      <button
                        class="btn btn-list custom-Commenticonbtn"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas-icon"
                        aria-controls="offcanvasRight"
                        data-bs-backdrop="true"
                      >
                        <img :src="item.medals_logo" class="author-icon" />
                        <span
                          class="icon-level"
                          :style="{
                            backgroundImage:
                              'url(' +
                              item.medals_logo_tail +
                              ')',
                          }"
                          >{{ item.medals_count }}</span
                        >
                      </button>
                    </div>
                    <div class="articleContent">
                      <span>
                        {{ item.subject }}
                      </span>
                      <router-link
                        :to="{ name: 'article', params: { id: item.tid } }"
                        @click="$shareFunctions.SentArticleApi(item.tid)"
                      >
                        <span class="viewMore">...查看全文</span>
                      </router-link>
                      <div
                        class="imgsCons albumGrid"
                        v-if="item.imgList.length > 0"
                      >
                        <template v-if="item.imgList.length === 1">
                          <div class="albumDivGrandson">
                            <img :src="item.imgList[0]" alt="Image 1" />
                          </div>
                        </template>
                        <template v-else>
                          <template
                            v-for="(pic, picIndex) in item.imgList.slice(0, 9)"
                            :key="picIndex"
                          >
                            <div class="albumDivGrandson">
                              <img :src="pic" alt="Image 1" />
                            </div>
                          </template>
                        </template>
                      </div>
                    </div>
                    <div class="shareCon">
                      <div class="row">
                        <div class="col-6">
                          <router-link
                            :to="{ name: 'forum', params: { id: item.fid } }"
                            @click="
                              $shareFunctions.getAllPlateContent(
                                item.fid,
                                'tuijian',
                                1
                              )
                            "
                          >
                            <button class="discussion mt-2">
                              <img
                                src="img/circle_detail_post_comment_big.png"
                              />
                              <span>{{ item.name }}</span>
                            </button>
                          </router-link>
                        </div>
                        <div class="col-6">
                          <div class="row">
                            <div class="col-4">
                              <button
                                class="btn btn-list shareButton"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas-share"
                                aria-controls="offcanvasBottom"
                              >
                                <img src="img/circle_detail_post_share.png" />
                                <span>分享</span>
                              </button>
                            </div>
                            <div class="col-4">
                              <a href="article.html">
                                <button class="btn">
                                  <img
                                    src="img/circle_detail_post_comment_big.png"
                                  />
                                  <span>{{ item.replies }}</span>
                                </button>
                              </a>
                            </div>
                            <div class="col-4">
                              <button class="btn likeButton">
                                <img
                                  src="img/ic_circle_detail_post_like_d.png"
                                  class="likeImage"
                                />
                                <span class="likeCount">{{
                                  item.favtimes
                                }}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab>
              <template v-slot:title>
                <span :class="{ 'custom-tab-button3': active === 1 }"
                  >採納</span
                >
              </template>
              <div style="height: 100%; overflow: auto">
                <div
                  class="tab-pane fade show active profile-missionTabContainer"
                  id="newbie"
                  role="tabpanel"
                  aria-labelledby="newbie-tab"
                  style="width: 100%"
                >
                   

                  <div
                    class="authorCon"
                    v-for="item in getCommunityAdoptionData"
                    :key="item.tid"
                  >
                    <div class="authorInfo">
                      <router-link
                        :to="{ name: 'author', params: { id: item.authorid } }"
                        @click="
                          $shareFunctions.getUserContent(item.authorid, 1)
                        "
                      >
                        <img class="authorImg" :src="item.authoricon" />
                      </router-link>

                      <div class="authorText">
                        <div class="authorName">{{ item.authorid }}</div>
                        BananaFish:無api
                        <div class="authorIdentity">版主</div>
                      </div>
                      <button
                        class="btn btn-list custom-Commenticonbtn"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas-icon"
                        aria-controls="offcanvasRight"
                        data-bs-backdrop="true"
                      >
                        <img :src="item.medals_logo" class="author-icon" />
                        <span
                          class="icon-level"
                          :style="{
                            backgroundImage:
                              'url(' +
                              item.medals_logo_tail +
                              ')',
                          }"
                          >{{ item.medals_count }}</span
                        >
                      </button>
                    </div>
                    <div class="articleContent">
                      <span>
                        {{ item.subject }}
                      </span>
                      <router-link
                        :to="{ name: 'article', params: { id: item.tid } }"
                        @click="$shareFunctions.SentArticleApi(item.tid)"
                      >
                        <span class="viewMore">...查看全文</span>
                      </router-link>
                      <div
                        class="imgsCons albumGrid"
                        v-if="item.imgList.length > 0"
                      >
                        <template v-if="item.imgList.length === 1">
                          <div class="albumDivGrandson">
                            <img :src="item.imgList[0]" alt="Image 1" />
                          </div>
                        </template>
                        <template v-else>
                          <template
                            v-for="(pic, picIndex) in item.imgList.slice(0, 9)"
                            :key="picIndex"
                          >
                            <div class="albumDivGrandson">
                              <img :src="pic" alt="Image 1" />
                            </div>
                          </template>
                        </template>
                      </div>
                    </div>
                    <div class="shareCon">
                      <div class="row">
                        <div class="col-6">
                          <router-link
                            :to="{ name: 'forum', params: { id: item.fid } }"
                            @click="
                              $shareFunctions.getAllPlateContent(
                                item.fid,
                                'tuijian',
                                1
                              )
                            "
                          >
                            <button class="discussion mt-2">
                              <img
                                src="img/circle_detail_post_comment_big.png"
                              />
                              <span>{{ item.name }}</span>
                            </button>
                          </router-link>
                        </div>
                        <div class="col-6">
                          <div class="row">
                            <div class="col-4">
                              <button
                                class="btn btn-list shareButton"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas-share"
                                aria-controls="offcanvasBottom"
                              >
                                <img src="img/circle_detail_post_share.png" />
                                <span>分享</span>
                              </button>
                            </div>
                            <div class="col-4">
                              <a href="article.html">
                                <button class="btn">
                                  <img
                                    src="img/circle_detail_post_comment_big.png"
                                  />
                                  <span>{{ item.replies }}</span>
                                </button>
                              </a>
                            </div>
                            <div class="col-4">
                              <button class="btn likeButton">
                                <img
                                  src="img/ic_circle_detail_post_like_d.png"
                                  class="likeImage"
                                />
                                <span class="likeCount">{{
                                  item.favtimes
                                }}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>

          <!--發布文章BTN-->
          <btn
            class="btn btn-list custom-sharebtn profile-myhireBTNs UploadBTN"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-UploadArticle"
            aria-controls="offcanvasBottom"
          >
            <img src="img/pencil.png" style="width: 6rem; height: 6rem" />
          </btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../../public/css/community.css");
</style>
<script>
import * as communityFun from "@/utils/communityFun"; // 确保路径正确
import { onMounted } from "vue";
import { mapGetters } from "vuex";
import { ref } from "vue";

export default {
  computed: {
    ...mapGetters("ws", [
      "getPlateIndexData",
      "getuserPlateData",
      "getCommunityHotData",
      "getCommunityNewthreadData",
      "getCommunityAdoptionData",
      "getCommunityRandomData",
      "getCountryContentData",
      "getArticleListData",
    ]),
  },
  setup() {
    const active = ref(0); // 设置默认激活的 Tab 索引
    onMounted(() => {
      communityFun.getPlateIndex();
      communityFun.getUserPlate();
      communityFun.getCommunityHot();
      communityFun.getCommunityNewThread();
      communityFun.getCommunityAdoption();
      communityFun.getCommunityRandom();
      communityFun.getCountryContent();
      communityFun.postNewThread();
    });
    return {
      active,
    };
  },
};
</script>
