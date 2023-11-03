<template>
    <div v-if="getAuthorInfo && $route.params.id && getAuthorInfo[$route.params.id]">
        <!--頂部-->
        <div class="topestDiv" id="authorPageHeadPicBack" :style="{ backgroundImage: 'url(' + getAuthorInfo[$route.params.id][0].photo_url + ')' }">
            <!-- 返回跟三個點的圖標 -->
            <!-- 上 -->
            <div class="topest">
                <div id="backIndexBt" class="closeOffcanvasBtn" @click="$router.go(-1)"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                        height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path
                            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg></div>
            </div>
            <!-- 中1 -->
            <div class="centerest1">
                <!-- 頭像 -->
                <div class="bigHeadDiv">
                    <img :src="getAuthorInfo[$route.params.id][0].photo_url" alt="" id="authorPageHeadPic">
                </div>
                <!-- 取消關注 -->
                <div>
                    <button id="cancelBt">取消关注</button>
                </div>
            </div>
            <!-- 中2 -->
            <div class="centerest2">
                <!-- 名字 -->
                <div id="authorPageName">{{ getAuthorInfo[$route.params.id][0].nickname }}</div>
                <!-- 簡介 -->
                <div id="authorPageIntro">
                    <span>{{ getAuthorInfo[$route.params.id][0].intro }}</span>
                </div>
                <div>
                    <div id="authorPageFollowers"><span  v-if="getFans && $route.params.id && getFans[$route.params.id]">{{ getFans[$route.params.id].fans
                    }}</span>粉絲</div>
                    <div id="authorPageFocus"><span v-if="getFollow && $route.params.id && getFollow[$route.params.id]">{{
                        getFollow[$route.params.id].follow }}</span>关注</div>
                </div>
            </div>
        </div>
        <!--底部-->
        <div class="lastPartBtDiv"></div>
        <div class="lastPart">
            <van-tabs v-model:active="active" swipeable>
                <van-tab title="動態"> <!-- 動態tab -->
                    <div v-if="getMovement[$route.params.id]">
                        <div id="authorPageMovement" class="tabContent" v-for="(item) in getMovement[$route.params.id]"
                            :key="item.tid">
                            <div class="authorInfoFa">
                                <div class="authorInfo">
                                    <img class="authorImg" :src="item.authoricon">
                                    <div class="authorText">
                                        <div class="authorName">{{ item.author }}</div>
                                        <div class="authorIdentity">{{ item.grouptitle }}</div>
                                    </div>
                                    <img class="authorTag" :src="item.medals_logo">
                                    <span class="authorLevel"
                                        :style="{ backgroundImage: 'url(' + item.medals_logo_tail + ')' }">{{
                                            item.medals_count }}
                                    </span>

                                </div>
                                <div class="articleContent">
                                    <span>
                                        {{ item.subject }}
                                    </span>
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
                                            <button class="discussion mt-2">
                                                <img src="../../public/img/circle_detail_post_comment_big.png">
                                                <span>{{ item.name }}</span>
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <div class="row">
                                                <div class="col-4">
                                                    <button class="btn shareButton">

                                                        <img src="../../public/img/circle_detail_post_share.png">
                                                        <span>分享</span>
                                                    </button>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <button class="btn">
                                                            <img src="../../public/img/circle_detail_post_comment_big.png">
                                                            <span>{{ item.replies }}</span>
                                                        </button>
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <button class="btn likeButton">
                                                        <img src="../../public/img/ic_circle_detail_post_like_d.png">
                                                        <span>{{ item.favtimes }}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <!-- BananFish (後端資料沒uid 到sock.js)-->
                <van-tab title="相冊">
                    <!-- 相冊tab -->
                    <div>
                        <div id="authorPageAlbumDiv" class="tabContent">
                            <div class="albumDivSon">
                                <div class="authorPageShotTime">2022/08/03</div>
                                <div class="authorPageAlbumGrid">
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="albumDivSon">
                                <div class="authorPageShotTime">2022/08/02</div>
                                <div class="authorPageAlbumGrid">
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                    <div class="albumDivGrandson">
                                        <img src="img/authorBackground.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="資料"> <!-- 資料tab -->
                    <div v-if="getAuthorInfo">
                        <div id="informationDiv" class="tabContent">
                            <div>个人信息</div>
                            <div id="authorPageGender">{{ getAuthorInfo[$route.params.id][0].nickname }}</div>
                            <div>地区</div>
                            <div id="authorPageHomeCity">{{ getAuthorInfo[$route.params.id][0].home_city ?
                                    getAuthorInfo[$route.params.id][0].home_city : '保密' }}</div>
                            <div>家乡</div>
                            <div id="authorPageHomeProvince">
                                {{ getAuthorInfo[$route.params.id][0].home_province ?
                                    getAuthorInfo[$route.params.id][0].home_province : '保密' }}
                            </div>

                            <div>个人签名</div>
                            <div id="authorPageIntro2">{{ getAuthorInfo[$route.params.id][0].intro ?getAuthorInfo[$route.params.id][0].intro:'我太懒了，什么都不想说哦' }}</div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>








        </div>
    </div>
</template>
<style>
@import '../../public/css/author.css';

.authorTag {
    width: 35px;
    height: 35px;
    z-index: 1;
}

.authorLevel {
    color: #fff;
    font-size: 10px;
    width: 50px;
    background-size: cover;
    text-align: right;
    margin-left: -20px;
    padding-right: 10px;
}
</style>
<script>

import { ref } from "vue";
import { mapGetters } from "vuex";


export default {
    name: "AuthorDetail",
    computed: {
        ...mapGetters("ws", ["getArticle", "getAuthorInfo", "getMovement", "getPhotos", "getFans", "getFollow"]),
    },

    setup() {

        const active = ref(0);

 
        return {

            active
        }
    }

};
</script>