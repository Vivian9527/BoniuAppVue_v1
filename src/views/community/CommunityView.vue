<template>
  <van-tabs v-model:active="active1">
    <van-tab title="社区">
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
                :to="{
                  name: 'forum',
                  params: { id: item.bbs_fid || 'default-value' },
                }"
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
          <router-link
            :to="{
              name: 'article',
              params: { id: getCommunityRandomData.tid || 'default-value' },
            }"
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
                        <!-- BananaFish:沒有頭像 -->
                        <img src="img/profilePic.jpg" />
                      </div>
                      <div class="authors">
                        {{ getCommunityRandomData.author }}
                      </div>
                    </div>
                  </div>
                  <div class="column-right">
                    <btn>
                      <img src="img/Refresh_icon.png" class="refresh" />
                    </btn>
                    <div class="answer">
                      <img
                        src="img/write.png"
                        style="height: 1rem; width: 1rem"
                      />
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
                            :to="{
                              name: 'author',
                              params: { id: item.authorid || 'default-value' },
                            }"
                            @click="
                              $shareFunctions.getUserContent(item.authorid, 1)
                            "
                          >
                            <img class="authorImg" :src="item.authoricon" />
                          </router-link>

                          <div class="authorText">
                            <div class="authorName">{{ item.authorid }}</div>
                            <!-- BananaFish:無api -->
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
                                  'url(' + item.medals_logo_tail + ')',
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
                            :to="{
                              name: 'article',
                              params: { id: item.tid || 'default-value' },
                            }"
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
                                v-for="(pic, picIndex) in item.imgList.slice(
                                  0,
                                  9
                                )"
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
                                :to="{
                                  name: 'forum',
                                  params: { id: item.fid || 'default-value' },
                                }"
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
                                    <img
                                      src="img/circle_detail_post_share.png"
                                    />
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
                            :to="{
                              name: 'author',
                              params: { id: item.authorid || 'default-value' },
                            }"
                            @click="
                              $shareFunctions.getUserContent(item.authorid, 1)
                            "
                          >
                            <img class="authorImg" :src="item.authoricon" />
                          </router-link>

                          <div class="authorText">
                            <div class="authorName">{{ item.authorid }}</div>
                            <!-- BananaFish:無api -->
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
                                  'url(' + item.medals_logo_tail + ')',
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
                            :to="{
                              name: 'article',
                              params: { id: item.tid || 'default-value' },
                            }"
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
                                v-for="(pic, picIndex) in item.imgList.slice(
                                  0,
                                  9
                                )"
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
                                :to="{
                                  name: 'forum',
                                  params: { id: item.fid || 'default-value' },
                                }"
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
                                    <img
                                      src="img/circle_detail_post_share.png"
                                    />
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
                            :to="{
                              name: 'author',
                              params: { id: item.authorid || 'default-value' },
                            }"
                            @click="
                              $shareFunctions.getUserContent(item.authorid, 1)
                            "
                          >
                            <img class="authorImg" :src="item.authoricon" />
                          </router-link>

                          <div class="authorText">
                            <div class="authorName">{{ item.authorid }}</div>
                            <!-- BananaFish:無api -->
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
                                  'url(' + item.medals_logo_tail + ')',
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
                            :to="{
                              name: 'article',
                              params: { id: item.tid || 'default-value' },
                            }"
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
                                v-for="(pic, picIndex) in item.imgList.slice(
                                  0,
                                  9
                                )"
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
                                :to="{
                                  name: 'forum',
                                  params: { id: item.fid },
                                }"
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
                                    <img
                                      src="img/circle_detail_post_share.png"
                                    />
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
    </van-tab>
    <van-tab title="菲律宾 ">
      <div
        id="tab2"
        class="tab-pane fade show active tab-content"
        role="tabpanel"
        aria-labelledby="tab2-tab"
      >
        <div class="main2">
          <!--切換國家-->
          <div class="switch">
            <div class="place">
              <img
                src="img/ic_discover_local_location.png"
                class="place-icon"
              />
              <div id="tab2-title">菲律宾</div>
            </div>
            <div id="SwitchLocation2" style="color: gray; margin-right: -4rem">
              切换国家 ＞
            </div>
            <!-- 選擇處這邊綁上id="SwitchLocation" -->
          </div>

          <!-- <div id="SwitchLocation"></div> -->
          <!-- 上面這一段不要 -->

          <!--二手交易區塊-->

          <div id="communityPbutton" class="pbutton">
            <router-link
              v-for="item in getuserPlateData"
              :key="item.id"
              :to="{ name: 'forum', params: { id: item.id } }"
              @click="$shareFunctions.getAllPlateContent(item.id, 'tuijian', 1)"
            >
              <div class="pbuttons">
                <img :src="item.logoUrl" />
                <div class="pbutton-title">{{ item.name }}</div>
              </div>
            </router-link>
          </div>

          <!--各國tg群按鈕-->
          <div id="communityCountryBtn" class="country-btn">
            <div id="communityCountryBtnTitle" class="country-btnTitle">
              在菲圈子
            </div>
            <div id="communityCountryBtnSon">
              <div class="btns-row">
                <a href="https://t.me/boniush365" class="tg-btn">
                  <div class="country-btns">
                    <img src="img/生活.jpg" />
                    <div class="country-btnsTitle">生活产业交流</div>
                  </div>
                </a>
                <a href="https://t.me/boniush365" class="tg-btn">
                  <div class="country-btns">
                    <img src="img/安危.jpg" />
                    <div class="country-btnsTitle">安危事件</div>
                  </div>
                </a>
                <a href="https://t.me/boniush365" class="tg-btn">
                  <div class="country-btns">
                    <img src="img/新聞.jpg" />
                    <div class="country-btnsTitle">新闻频道</div>
                  </div>
                </a>
                <a href="https://t.me/boniush365" class="tg-btn">
                  <div class="country-btns">
                    <img src="img/換匯.jpg" />
                    <div class="country-btnsTitle">便民换汇</div>
                  </div>
                </a>
                <a href="https://t.me/boniush365" class="tg-btn">
                  <div class="country-btns">
                    <img src="img/外賣.jpg" />
                    <div class="country-btnsTitle">美食外卖资讯</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!--熱門推薦-->
          <div class="hot">热门推荐</div>
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
                  :to="{
                    name: 'author',
                    params: { id: item.authorid || 'default-value' },
                  }"
                  @click="$shareFunctions.getUserContent(item.authorid, 1)"
                >
                  <img class="authorImg" :src="item.authoricon" />
                </router-link>

                <div class="authorText">
                  <div class="authorName">{{ item.authorid }}</div>
                  <!-- BananaFish:無api -->
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
                      backgroundImage: 'url(' + item.medals_logo_tail + ')',
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
                  :to="{
                    name: 'article',
                    params: { id: item.tid || 'default-value' },
                  }"
                  @click="$shareFunctions.SentArticleApi(item.tid)"
                >
                  <span class="viewMore">...查看全文</span>
                </router-link>
                <div class="imgsCons albumGrid" v-if="item.imgList.length > 0">
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
                        <img src="img/circle_detail_post_comment_big.png" />
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
                            <img src="img/circle_detail_post_comment_big.png" />
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
                          <span class="likeCount">{{ item.favtimes }}</span>
                        </button>
                      </div>
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
</template>

<style scoped>
@import url("../../../public/css/community.css");
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
    const active1 = ref(0); // 设置默认激活的 Tab 索引
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
      active1,
    };
  },
};
</script>
