<template>
    <div>
        <router-link :to="{ name: 'profile' }"> <button type="button" class=" text-reset custom-backbtn">
                <img src="img/back icon.png">
            </button></router-link>

        <div class="profile-TGGroupTitle">
            我的发布
        </div>

        <div class="offcanvas-body profile-TGGroupBody">
            <div class="profile-ArticleOfMineContainer">
                <van-tabs v-model:active="active">
                    <van-tab title="帖子">
                        <router-link v-for="item in getUserThreadContentData" :key="item.tid"
                            :to="{ name: 'article', params: { id: item.tid } }"
                            @click="$shareFunctions.SentArticleApi(item.tid)">
                            <span class="viewMore">
                                <div class="tab-pane fade show active" id="MyPageTab1" role="tabpanel"
                                    aria-labelledby="MyPageTab1-tab">
                                    <div class="ArticleOfMine">
                                        <div class="ArticleOfMine-Header">
                                            <!-- BananaFish這邊沒照片API -->
                                            <router-link :to="{ name: 'author', params: { id: item.authorid } }"
                                                @click="$shareFunctions.getUserContent(item.authorid, 1)">
                                                <img src="img/profilePic.jpg" class="ArticleOfMine-HeaderProfileImg">
                                            </router-link>

                                            <div class="ArticleOfMine-HeaderName">
                                                <div class="ArticleOfMine-HeaderNames">BananaFish我沒有名字API</div>
                                                <!-- BananaFish沒有下面的API -->
                                                <div class="ArticleOfMine-HeaderLevel">LV6 呢喃的歌声</div>
                                            </div>
                                            <!-- BananaFish沒有下面的API -->
                                            <img src="img/勳章.png" class="ArticleOfMine-HeaderIconImg">
                                        </div>
                                        <div class="ArticleOfMine-BodyText">
                                            <div class="ArticleOfMine-BodyTexts">{{ item.subjec }}</div>
                                            <div><span class="ArticleOfMine-BodyBlueText">...查看全文</span></div>
                                        </div>
                                        <!-- BananaFish沒有下面的API -->
                                        <div class="ArticleOfMineImageGroup">
                                            <img src="img/2.jpg">
                                            <img src="img/3.jpg">
                                            <img src="img/2.jpg">
                                            <img src="img/3.jpg">
                                            <img src="img/2.jpg">
                                        </div>
                                        <div class="ArticleOfMine-Footer">

                                            <!-- BananaFish沒有論壇的API -->
                                            <router-link :to="{ name: 'forum', params: { id: 2 } }"
                                                @click="$shareFunctions.getAllPlateContent(2, 'tuijian', 1)">
                                                <div class="ArticleOfMine-FooterLeft">
                                                    <img src="img/circle_detail_post_comment_big.png">
                                                    <div>{{ item.name }}</div>
                                                </div>
                                            </router-link>

                                            <div class="ArticleOfMine-FooterRight">
                                                <div class="ArticleOfMine-FooterShareBTN">
                                                    <img src="img/circle_detail_post_share.png">
                                                    <div class="ArticleOfMine-FooterShareBTNText">分享</div>
                                                </div>
                                                <a href="article.html" class="ArticleOfMine-FooterCommentBTN">
                                                    <img src="img/circle_detail_post_comment_big.png">
                                                    <div class="ArticleOfMine-FooterCommentBTNText">{{ item.replies }}</div>
                                                </a>
                                                <div class="ArticleOfMine-FooterLikeBTN">
                                                    <img src="img/ic_circle_detail_post_like_d.png" class="like-btn"
                                                        data-liked="false" data-count="0">
                                                    <!-- BananaFish沒有API -->
                                                    <div class="ArticleOfMine-FooterLikeBTNText like-count">0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </router-link>
                    </van-tab>
                    <van-tab title="回帖">
                        <router-link v-for="item in getThreadRepliesData" :key="item.tid"
                            :to="{ name: 'article', params: { id: item.tid } }"
                            @click="$shareFunctions.SentArticleApi(item.tid)">
                            <div class="mt-3">
                                <div class="CommentOfMine-Header">
                                    <!-- BananaFish:沒有頭像 -->
                                    <router-link :to="{ name: 'author', params: { id: item.authorid } }"
                                        @click="$shareFunctions.getUserContent(item.authorid, 1)">
                                        <img src="img/profilePic3.jpg">
                                    </router-link>

                                    <div class="CommentOfMine-HeaderName">
                                        <div class="CommentOfMine-HeaderNames">{{ item.a1 }}</div>
                                        <div class="CommentOfMine-HeaderTime">
                                            {{ $otherToolFunction.changeTime(item.dateline) }}</div>
                                    </div>
                                </div>
                                <div class="CommentOfMine-Body">{{ item.subject }}</div>
                                <div class="CommentOfMine-Footer">
                                    <div>原帖：</div>
                                    <div>{{ item.subjec }}</div>
                                </div>
                            </div>


                        </router-link>
                    </van-tab>
                </van-tabs>

            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('../../../public/css/profile.css');
</style>
<script>

import { ref } from "vue";
import { onMounted } from "vue";
import { mapGetters } from "vuex";


export default {
    computed: {
        ...mapGetters("ws", [
            "getUserThreadContentData",
            "getThreadRepliesData",
        ]),
    },

    setup() {

        const active = ref(0)
        onMounted(() => {

        });
        return {
            active
        };
    }

}


</script>