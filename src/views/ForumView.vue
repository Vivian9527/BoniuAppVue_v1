<template>
    <div class="HeaderIcon">
        <a class="btn custom-backbtn closeOffcanvasBtn">
            <!-- BananaFish圖片有問題 -->
            <!-- <img id="backIcon" src="../../public/img/back icon-white.png" class="header-img1"> -->
        </a>
        <div class="HeaderText">综合讨论区</div>
        <div id="SectionPageHiddenElement"></div>
        <a href="">
            <!-- BananaFish圖片有問題 -->
            <!-- <img id="searchIcon" src="../../public/img/search-white.png" style="width: auto;height: 1.2rem;"> -->
        </a>

    </div>
    <div class="SectionHeader">

        <img :src="getPlateData[$route.params.id][0].icon" class="SectionHeaderImg">
        <div class="SetionHeaderTitle">
            <span style="font-weight: bold;font-size: 1.4rem;" id="SectionPageMainName">{{
                getPlateData[$route.params.id][0].name }}</span>
            <div class="SectionHeaderModerator">
                <div>版主</div>
                <img src="../../public/img/profilePic.jpg" style="width: auto;height: 1.5rem;border-radius: 50%;">
                <img src="../../public/img/profilePic2.jpg" class="SectionHeaderModeratorImg">
                <img src="../../public/img/profilePic3.jpg" class="SectionHeaderModeratorImg">
                <img src="../../public/img/profilePic4.jpg" class="SectionHeaderModeratorImg">
            </div>
        </div>
        <btn class="SectionSubscribeBTN btn" id="subscribeButton">
            收藏
        </btn>
    </div>



    <!--推薦、最新、48小時熱門、熱門tab-->
    <div class="profile-missionContainer" id="ArticleArea">
        <ul class="nav custom-ArticleNav" id="myTabs" role="tablist">
            <router-link :to="{ name: 'forum', params: { id: $route.params.id } }"
                @click="$shareFunctions.getAllPlateContent($route.params.id, 'tuijian', 1)">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="SectionPagenewbie" data-toggle="tab" role="tab"
                        aria-selected="true">推荐</a>
                </li>
            </router-link>
            <router-link :to="{ name: 'forum', params: { id: $route.params.id } }"
                @click="$shareFunctions.getAllPlateContent($route.params.id, 'new', 1)">
                <li class="nav-item profile-missionNavTabsContainer" role="presentation">
                    <a class="nav-link" id="SectionPagedaily" data-toggle="tab" role="tab" aria-selected="false">最新</a>
                </li>
            </router-link>
            <router-link :to="{ name: 'forum', params: { id: $route.params.id } }"
                @click="$shareFunctions.getAllPlateContent($route.params.id, '48h', 1)">
                <li class="nav-item profile-missionNavTabsContainer" role="presentation">
                    <a class="nav-link" id="SectionPageadvanced" data-toggle="tab" role="tab"
                        aria-selected="false">48小时热门</a>
                </li>
            </router-link>
            <router-link :to="{ name: 'forum', params: { id: $route.params.id } }"
                @click="$shareFunctions.getAllPlateContent($route.params.id, 'hot', 1)">
                <li class="nav-item profile-missionNavTabsContainer" role="presentation">
                    <a class="nav-link" id="SectionPagehot" data-toggle="tab" role="tab" aria-selected="false">最热</a>
                </li>
            </router-link>




        </ul>
        <div class="tab-content" id="myTabsContent">
            <!--Tab1-推薦-->
            <div class="tab-pane fade show active profile-missionTabContainer" id="SectionPageMainCon" role="tabpanel"
                aria-labelledby="newbie-tab">
                <!-- 熱門内容 -->
                <div id="authorCon" v-for=" item in getAllPlateContentData" :key="item.tid">
                    <!-- {{ item }} -->
                    <div class="authorInfo">
                        <router-link :to="{ name: 'author', params: { id: item.authorid } }"
                            @click="$shareFunctions.getUserContent(item.authorid, 1)">
                            <img class="authorImg" :src="item.authoricon">
                        </router-link>
                        <div class="authorText">
                            <div class="authorName">{{ item.author }}</div>
                            <div class="authorIdentity">版主</div>
                        </div>

                        <button class="btn btn-list custom-Commenticonbtn" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas-icon" aria-controls="offcanvasRight" data-bs-backdrop="true">
                            <img :src="item.medals_logo">
                            <span class="icon-level" :style="{ backgroundImage: 'url(' + medals_logo_tail + ')' }">{{
                                item.medals_count }}</span>
                        </button>


                    </div>
                    <div class="articleContent">
                        <span>
                            {{ item.subject }}
                        </span>
                        <router-link :to="{ name: 'article', params: { id: item.tid } }"
                            @click="$shareFunctions.SentArticleApi(item.tid)">
                            <span class="viewMore">...查看全文</span>
                        </router-link>
                        <!-- BananaFish圖片有資料 CSS有問題 沒顯示出來 .albumDivGrandson之類的設定要修正 -->

                        <div class="../../public/imgsCons albumGrid" v-if="item.imgList.length > 0">
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
                                <!-- BananaFish沒有論壇id 先寫死 -->
                                <router-link :to="{ name: 'forum', params: { id: 2 } }"
                                    @click="$shareFunctions.getAllPlateContent(2, 'tuijian', 1)">
                                    <button class="discussion mt-2" tabindex="0" :key="2">
                                        <img src="../../public/img/circle_detail_post_comment_big.png">
                                        <span>綜合討論區</span>
                                    </button>
                                </router-link>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-4">
                                        <button class="btn btn-list shareButton" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvas-share" aria-controls="offcanvasBottom">
                                            <img src="../../public/img/circle_detail_post_share.png">
                                            <span>分享</span>
                                        </button>
                                    </div>
                                    <div class="col-4">
                                        <router-link :to="{ name: 'article', params: { id: item.tid } }"
                                            @click="$shareFunctions.SentArticleApi(item.tid)">
                                            <button class="btn">
                                                <img src="../../public/img/circle_detail_post_comment_big.png">
                                                <span>{{ item.replies }}</span>
                                            </button>
                                        </router-link>


                                    </div>
                                    <div class="col-4">
                                        <button class="btn likeButton">
                                            <img src="../../public/img/ic_circle_detail_post_like_d.png" class="likeImage">
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
</template>
<style lang="scss" scoped>
@import "../../public/css/SectionPage.css";
</style>
<script>
import { mapGetters } from "vuex";


export default {
    name: "ForumView",
    components: {

    },
    computed: {
        ...mapGetters("ws", ["getPlateData", "getAllPlateContentData"]),
    },
    setup() {
        return {};
    },
};
</script>
