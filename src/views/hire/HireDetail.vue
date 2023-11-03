<template>
<div>
    <div class="modal-content ">
        <div class="d-flex justify-content-between ">
            <button type="button" style=" border:none ;background-color:#ffffff;" class="btn-lg fs-3 closeOffcanvasBtn" @click="$router.go(-1)">🡨</button>
            <h1 class="modal-title fs-5 text-center mx-auto " id="exampleModalLabel">职位详情</h1>
        </div>
        <div class="modal-body">
            <div class="container">
                <div class="row ">
                    <div class="col-9">
                        <h3 class="mb-0 fw-bold" id="JonInsidePageTitle">{{getjob_jobcontentData[$route.params.id].title}}</h3>
                        <div class="d-flex">
                            <p class="fs-6 me-3 text-nowrap"><i class="fa-solid fa-location-dot me-1"
                                    style="color: #D3D3D3;"></i>{{getjob_jobcontentData[$route.params.id].country}}</p>
                            <p class="fs-6 me-3 text-nowrap"><i class="fa-solid fa-briefcase me-1"
                                    style="color: #D3D3D3;"></i>{{getjob_jobcontentData[$route.params.id].experience}}</p>
                            <p class="fs-6 me-3 text-nowrap"><i class="fa-solid fa-graduation-cap me-1"
                                    style="color: #D3D3D3;"></i>{{getjob_jobcontentData[$route.params.id].education}}</p>
                            <p class="fs-6 me-3 text-nowrap"><i class="fa-brands fa-black-tie me-1"
                                    style="color: #D3D3D3;"></i>{{getjob_jobcontentData[$route.params.id].position_name_job}}</p>
                        </div>
                    </div>
                    <div class="col-3   d-flex">
                        <p class="ms-auto text-danger ">{{getjob_jobcontentData[$route.params.id].salary}}</p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12  align-items-center">
                        <div class="d-flex align-items-center bg-light">
                            <img src="img/shana-van-roosbroek-ji8cAmwv5fc-unsplash.jpg" alt=""
                                class="img-fluid rounded-circle  me-3 " style="height: 50px; width: 50px;">
                            <div>
                                <p class="mb-0 fs-5 fw-bold">{{getjob_jobcontentData[$route.params.id].creator}}</p>
                                <p class="mb-0 text-secondary">{{$otherToolFunction.changeTime(getjob_jobcontentData[$route.params.id].update_time)}}</p>
                            </div>
                            <div class="ms-auto">
                                <img :src="getjob_jobcontentData[$route.params.id].logo" alt="" class="img-fluid"
                                    style="width: 20px;">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 其他要求 -->
                <div class="row mt-3">
                    <div class="col-12">
                        <div>
                            <h3 class="fw-bold">其他要求</h3>
                                <p>性别要求:男|语言要求:中文|国籍要求:不限</p>
                        </div>
                    </div>
                </div>
                <!-- 擁有福利 -->
                <div class="row mt-3">
                    <div class="col-12">
                        <h3 class="fw-bold">拥有福利</h3>
                            <div class="d-flex flex-wrap">
                                <p class="bg-body-secondary me-2 p-2 rounded">
                                    包住
                                </p>
                                <p class="bg-body-secondary me-2 p-2 rounded">
                                    有餐補
                                </p>
                                <p class="bg-body-secondary me-2 p-2 rounded">
                                    年終獎
                                </p>
                                <p class="bg-body-secondary me-2 p-2 rounded">
                                    年終獎
                                </p>
                                <p class="bg-body-secondary me-2 p-2 rounded">
                                    年終獎
                                </p>
                                <p class="bg-body-secondary me-2 p-2 rounded">
                                    年終獎
                                </p>
                                <p class="bg-body-secondary me-2 p-2 rounded">
                                    年終獎
                                </p>
                            </div>
                    </div>
                </div>
                <!-- 職位描述 -->
                <div class="row mt-3">
                    <div class="col-12">
                        <div>
                            <h3 class="fw-bold">职位描述</h3>
                                <div>
                                    <p class="article-content mb-0">
                                        只要上班成長天地影片第二次物流一是，鈴聲下載逐步複雜我家還有詢問丈夫多媒體，哈哈親自世紀，不需要億元某種及其一絲成長，設計不是父母這樣姑娘生命倒是所謂那個雖然觀念互動逐漸飯店，治療難道我國讓人解放性能你怎麼人事衝擊，一批有可能也有一邊於是返回有一種，日常。
                                    </p>

                                </div>
                                <div class="d-flex">
                                    <button class="btn btn-link text-primary link-underline-light px-1"
                                        id="showMore">查看全部</button>
                                </div>
                        </div>
                    </div>
                </div>
                <!-- 特別聲明 -->
                <div class="row mt-3">
                    <div>
                        <h3 class="fw-bold text-danger">特別聲明</h3>
                    </div>
                    <div>
                        <p>1.求职过程中,注意鉴别公司真为、警惕薪资高于市场价</p>
                        <p>2.面试前请告知亲友面试地点,最好有人陪同</p>
                        <p>3.不轻易上陌生人的车辆,如需乘坐车辆请把号牌告知朋友并打开定位</p>
                        <p>4.面试地点选择在人多的地方或正规办公室,请勿私自前往私人场所做入职体验</p>
                        <p>5.正规企业绝不会向求职者索取任何费用,若已发现假冒公司、与承诺不符等被骗事实,请与博牛官方联系,博牛核实后将在第一时间封禁帐号,并往曝光处理
                        </p>
                    </div>
                </div>
            </div>
            <div class="container bg-white mt-3">
                <div class="row">
                    <div class="col-12 ">
                        <div class="d-flex justify-content-between mt-3">
                            <h4 class="fw-bold">职位问答</h4>
                            <button class="btn btn-primary">查看全部</button>
                        </div>
                        <div>
                            <img src="img/ic_list_empty.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<style scoped>
 .backButton {
            text-decoration: none;
            color: #000000;
            margin-right: 20px;
            font-size: 30px;
        }

        .article-content {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            /* 显示的行数 */
            overflow: hidden;
        }
</style>
<script>

// import randomAd from '../components/randomAd.vue';
import { mapGetters } from "vuex";
// import { computed } from "vue";
// import notData from '../components/notData.vue';
// import { useRoute } from 'vue-router'; // 导入 useRoute
// import { useStore } from 'vuex';

export default {
    name: "IndexView",
    computed: {
        ...mapGetters("ws", ["getjob_jobcontentData"]),
    },
    components: {
        // notData,
        // randomAd
    },

    setup() {
        // const store = useStore(); // 获取 Vuex store 实例
        // const route = useRoute();
        // const getArticle = computed(() => store.getters['ws/getArticle']);


     


        return {
    
        }
    }

};
</script>