<template>
    <!--header-->
    <div class="header">
        <a class="btn btn-secondary custom-backbtn closeOffcanvasBtn" @click="$router.go(-1)">
            <img src="../../public/img/back icon.png" class="header-img1">
        </a>
        <a class="header-link">
            <img src="../../public/img/circle_detail_post_comment_big.png">
            <div id="articleForumName">综合讨论区</div>
        </a>
        <img src="../../public/img/adit.png" class="header-img2">
        <button class="btn btn-list custom-sharebtn" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-share" aria-controls="offcanvasBottom">
            <img src="../../public/img/share.png" class="header-img3">
        </button>
    </div>
    <!--文章container-->
    <div class="article-container">
        <!--文章-標題欄-->
        <div class="article-title" id="article-title">
            {{ getArticle[$route.params.id].articles[0].subject }}
        </div>
        <!--文章-作者欄-->
        <div class="author">
            <div class="profilePic">
                <img :src="getArticle[$route.params.id].articles[0].avatarUrl" id="author-img">
                <!--下方V為官方勳章-->
                <div class="officialCertification-icon">
                    V
                </div>
            </div>
            <div class="author-name">
                <div class="author-names" id="author-names">
                    {{ getArticle[$route.params.id].articles[0].author }}
                </div>
                <div class="time">
                    {{ $otherToolFunction.changeTime(getArticle[$route.params.id].articles[0].dateline) }}
                </div>
            </div>
            <div class="certification-icon">
                <button class="btn btn-list custom-iconbtn" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-icon" aria-controls="offcanvasRight" data-bs-backdrop="true">
                    <img :src="getArticle[$route.params.id].articles[0].medals_logo" class="certification-icons">
                    <span class="certification-icons2">{{ getArticle[$route.params.id].articles[0].medals_count }}</span>
                </button>
                <div class="reading-count">
                    {{ getArticle[$route.params.id].articles[0].views }}
                </div>
            </div>
            <div class="container mt-4">
                <button id="followBtn" class="btn btn-primary subscribe">+关注</button>
            </div>
        </div>
        <!--編輯紀錄-->
        <!--文章-內容-->
        <div class="article-content" id="article-content">
            <span v-html="$otherToolFunction.bbcodeToHtml(getArticle[$route.params.id].articles[0].message)"></span>
        </div>

        <!--左版塊，右閱讀量-->

        <div class="article-footer">
            <a class="footer-link">
                <img src="img/circle_detail_post_comment_big.png">
                <div id="footer-link-forum">{{ getArticle[$route.params.id].articles[0].name }}</div>
            </a>
            <div id="footer-link-read">阅读 {{ getArticle[$route.params.id].articles[0].views }}</div>
        </div>
    </div>
    <!--相關閱讀-->
    <div class="related-article">
        <div class="related-title">
            相关阅读
        </div>
        <div id="relatedCon" v-if="getArticle && getArticle[$route.params.id] && getArticle[$route.params.id].relatedThread">
            <router-link :to="{ name: 'article', params: { id: item2.tid } }"
                @click="$shareFunctions.SentArticleApi(item2.tid)"
                v-for="(item2,index) in  getArticle[$route.params.id].relatedThread " :key="item2.tid">
                <button class="btn btn-list custom-Commenticonbtn related-articles" type="button" v-if="index<3">
                    <div class="related-articlesTitle">
                        {{ item2.subject }}
                    </div>
                    <!-- BananaFish沒資料 -->
                    <div class="related-text">
                        综合讨论区
                    </div>
                </button>
            </router-link>
        </div>
    </div>
    <!--廣告-->
    <randomAd />
    <!--評論-->
    <van-tabs v-model:active="active" shrink>
        <div style="text-align: right;">
            <button class="order-btns" id="ascendingBt" @click="sortByTime('descending')">正序</button>|
            <button class="order-btns" id="descendingBt" @click="sortByTime('ascending')">倒序</button>
        </div>
        <van-tab>
            <template v-slot:title>
                <span :class="{ 'custom-tab-button3': active === 0 }">全部评论</span>
            </template>
            <div style="height: 100%; overflow: auto">
                <div class="tab-pane fade show active" id="allComments" role="tabpanel" aria-labelledby="allComments-tab"
                    v-if="getArticle[$route.params.id].messages.length > 0">
                    <!-- 在这里放全部评论的内容 -->
                    <!--評論-->
                    <div class="comments" v-for="item2 in getArticle[$route.params.id].messages" :key="item2.pid">
                        <div class="allComments-header">
                            <img :src="item2.avatarUrl" class="CprofilePic">
                            <div class="comment-author">
                                <div class="comment-authors">{{ item2.author }}</div>
                                <!-- BananaFish沒有沙發API -->
                                <div id="1" class="comment-list">沙发</div>
                            </div>
                            <button class="btn btn-list custom-Commenticonbtn" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas-icon" aria-controls="offcanvasRight" data-bs-backdrop="true">
                                <img :src="item2.medals_logo" class="author-icon">
                                <span>{{ item2.medals_count }}</span>
                            </button>
                            <img src="img/ic_circle_detail_post_like_d.png" class="like">
                            <div class="like-text">赞</div>
                        </div>
                        <!-- BananaFish這一邊有問題 -->
                        <div class="author-comments" v-html="$otherToolFunction.bbcodeToHtml(item2.message)"></div>
                        <!-- <div class="author-comments">
                            {{ item2.message }}
                        </div>  -->
                        <div class="comment-footer">
                            <div class="comment-time">{{ $otherToolFunction.changeTime(item2.dateline) }}</div>
                            <button class="btn comment-replybtn" type="button" data-bs-toggle="modal"
                                data-bs-target="#commentModal">
                                <img src="img/circle_detail_post_comment_big.png" class="comment-img">
                                <div class="reply">回复</div>
                            </button>
                        </div>
                    </div>
                    <div class="bottom">
                        啊呀，到底啦！
                    </div>
                </div>
                <notData v-else></notData>
            </div>
        </van-tab>
        <van-tab>
            <template v-slot:title>
                <span :class="{ 'custom-tab-button3': active === 1 }">只看楼主</span>
            </template>
            <div style="height: 100%; overflow: auto">
                <div class="comments" v-for="item2 in getArticle[$route.params.id].messages" :key="item2.pid">
                    <div v-if="item2.authorid == getArticle[$route.params.id].articles[0].authorid">
                        <div class="allComments-header">
                            <img :src="item2.avatarUrl" class="CprofilePic">
                            <div class="comment-author">
                                <div class="comment-authors">{{ item2.author }}</div>
                                <!-- BananaFish沒有沙發API -->
                                <div id="1" class="comment-list">沙发</div>
                            </div>
                            <button class="btn btn-list custom-Commenticonbtn" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas-icon" aria-controls="offcanvasRight" data-bs-backdrop="true">
                                <img :src="item2.medals_logo" class="author-icon">
                                <span>{{ item2.medals_count }}</span>
                            </button>
                            <img src="img/ic_circle_detail_post_like_d.png" class="like">
                            <div class="like-text">赞</div>
                        </div>
                        <div class="author-comments">
                            {{ item2.message }}
                        </div>
                        <div class="comment-footer">
                            <div class="comment-time">{{ $otherToolFunction.changeTime(item2.dateline) }}</div>
                            <button class="btn comment-replybtn" type="button" data-bs-toggle="modal"
                                data-bs-target="#commentModal">
                                <img src="img/circle_detail_post_comment_big.png" class="comment-img">
                                <div class="reply">回复</div>
                            </button>
                        </div>
                    </div>
                </div>
                <notData
                    v-if="getArticle[$route.params.id].messages.filter(item2 => item2.authorid == getArticle[$route.params.id].articles[0].authorid).length < 1">
                </notData>
            </div>

        </van-tab>
    </van-tabs>
    <div class="comment">
    </div>
    <!--Footer -->
    <div class="footer">
        <!-- 触发评论框的按钮 -->
        <button class="btn  writingComment" type="button" data-bs-toggle="modal" data-bs-target="#commentModal">
            我来评论
        </button>
        <div class="footer-img">
            <button class="btn btn-list custom-sharebtn" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-share" aria-controls="offcanvasBottom">
                <img src="img/circle_detail_post_share.png">
            </button>
            <button class="btn btn-no-color writingComment" type="button" data-bs-toggle="modal"
                data-bs-target="#commentModal">
                <div class="comment-count">
                    <img src="img/circle_detail_post_comment_big.png">
                    <div>4</div>
                </div>
            </button>
            <div class="like-count">
                <img src="img/ic_circle_detail_post_like_d.png" id="footer-likeImage">
                <div class="like-countText">1</div>
            </div>
        </div>
    </div>
</template>
<style>
@import '../../public/css/article.css';
</style>
<script>

import randomAd from '../components/randomAd.vue';
import { mapGetters } from "vuex";
import { ref, computed } from "vue";
import notData from '../components/notData.vue';
import { useRoute } from 'vue-router'; // 导入 useRoute
import { useStore } from 'vuex';

export default {
    name: "IndexView",
    computed: {
        ...mapGetters("ws", ["getArticle"]),
    },
    components: {
        notData,
        randomAd
    },

    setup() {
        const store = useStore(); // 获取 Vuex store 实例
        const route = useRoute();
        const getArticle = computed(() => store.getters['ws/getArticle']);

        const active = ref(0); // 设置默认激活的 Tab 索引
        const sortByTime = (order) => {
            if (order === 'ascending') {
                getArticle.value[route.params.id].messages.sort((a, b) => a.dateline - b.dateline);
            } else {
                getArticle.value[route.params.id].messages.sort((a, b) => b.dateline - a.dateline);
            }
        };


        return {
            active,
            sortByTime
        }
    }

};
</script>