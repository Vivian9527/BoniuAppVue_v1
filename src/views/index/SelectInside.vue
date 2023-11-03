<template v-if="gethomeChoiceDataSid">
    <!-- 標題區 -->
    <div id="pageHead" :style="'background-image: url(' + gethomeChoiceDataSid.picPath + ')'">
        <div class="col-1 closeOffcanvasBtn" id="backIndexBt" @click="$router.go(-1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
        </div>
        <div id="pageHeadTitle">
            <div id="pageHeadTitle1">{{ gethomeChoiceDataSid.tltle }}</div>
            <div id="pageHeadTitle2">{{ gethomeChoiceDataSid.intro }}</div>
        </div>

    </div>
    <!-- 文章渲染區 -->
    <div id="mainContent">
        <router-link :to="{ name: 'article', params: { id: item.tid } }" @click="$shareFunctions.SentArticleApi(item.tid)" v-for="item in gethomeChoiceCategoryData" :key="item.aid">
        <div class="articleCon">
            
            <div class="articleTextCon">
                <div class="articleTitle">{{ item.subject }}</div>
                <div class="articleDiscussion">{{ item.name }}</div>
            </div>
            <div class="articleCover">
                <!-- BananaFish沒有圖片 傳回來都是同一筆資料 -->
                <img src="../../../public/img/Head.jpg" alt="">  
            </div>
       
        </div>
    </router-link>
    </div>
</template>
<style lang="scss" scoped>
@import "../../../public/css/selectedInsidePage.css";
</style>

<script>

import { mapGetters } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: "SelectView",
    components: {},
    computed: {
        ...mapGetters("ws", ["gethomeChoiceData", "gethomeChoiceCategoryData"]),
        gethomeChoiceDataSid() {
            const router = useRouter();
            // 从路由中获取名为 "sid" 的参数
            const sidParam = router.currentRoute.value.params.id;
            if (sidParam) {
                // 使用参数值查找数据
                const foundData = this.gethomeChoiceData.find(item => item.sid == sidParam);
                return foundData || null;
            }
            return null; // 在没有参数时也返回一个值，可以根据需要修改
        }
    },
    setup() {




        return {

        };
    },
};
</script>