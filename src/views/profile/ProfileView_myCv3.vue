<template>
    <div id="offcanvas-MyResumeStep3">
        <router-link :to="{ name: 'ProfileViewMyCv2' }">
            <div class="offcanvas-header profile-TGGroupHeader" style="background-color: #f3f3f3;">
                <btn type="button" class=" text-reset custom-backbtn">
                    <img src="img/back icon.png">
                </btn>
            </div>
        </router-link>
        <div class="MyResumeBody">
            <div class="MyResumeTitle">
                <div class="MyResumeTitleRow">
                    <div class="MyResumeTitleRowBold">求职信息</div>
                    <div class="MyResumeTitleRowNormal"><span style="color: blue;">3</span>/3</div>
                </div>
                <div class="MyResumeTitleDetail">注意带<span style="color: red;">*</span>号为必填项</div>
            </div>
            <div class="MyResumeName">
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween"
                    style="border-bottom: 0.5rem solid #f3f3f3;">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">岗位分类<span style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <btn class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button"
                            style="font-size: 1.1rem;" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas-MyResumeJobClassification" aria-controls="offcanvasBottom">
                            <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeCountryBTN">
                                <div class="MyResumeGenderBTNText">请选择</div>
                                <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                            </button>
                        </btn>
                    </div>
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">期望薪资<span style="color: red;">*</span></span>
                        <div class="MyResumeNameTextDetail">(税后)</div>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeExpectedSalaryBTN">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                        </button>
                    </div>
                  
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">期望国家<span style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeExpectedCountryBTN">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                        </button>
                    </div>
                  
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">到岗时间<span style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeAvailabilityTimeBTN">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                        </button>
                    </div>
                 
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween"
                    style="border-bottom: 0.5rem solid #f3f3f3;">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">求职状态<span style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeEmploymentStatusBTN">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                        </button>
                    </div>

                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween" style="height: 7rem;">
                    <div class="input-group-prepend" style="display: flex;flex-direction: column;">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">个人简介<span style="color: red;">*</span></span>
                        <div class="MyResumePersonalProfileTextContainer">
                            <div class="MyResumePersonalProfileText">简单介绍一下自己吧～</div>
                            <div class="MyResumePersonalProfileText">例如：工作业务等等...</div>
                        </div>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <btn class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button"
                            style="font-size: 1.1rem;" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas-MyResumePersonalProfile" aria-controls="offcanvasBottom">
                            <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeCountryBTN">
                                <div class="MyResumeGenderBTNText">请选择</div>
                                <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                            </button>
                        </btn>
                    </div>
                </div>


                <btn class="MyResumeAddAnotherContact MypageNoCvNextBt3" id="AddAnotherContactOptions"
                    style="color: white;background-color: blue;bottom: 0;">
                    提交
                </btn>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('../../../public/css/profile.css');
</style>
<script>


import { onMounted } from "vue";
import { mapGetters } from "vuex";


export default {
    computed: {
        ...mapGetters("ws", [
            "getMyFansData",
        ]),
    },

    setup() {


        onMounted(() => {

        });
        return {

        };
    }

}


</script>