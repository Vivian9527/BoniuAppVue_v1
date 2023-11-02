<template>
    <div>
        <router-link :to="{ name: 'profile' }">
            <div class="offcanvas-header profile-TGGroupHeader" style="background-color: #f3f3f3;">
                <btn type="button" class=" text-reset custom-backbtn">
                    <img src="img/back icon.png">
                </btn>
            </div>
        </router-link>

        <div class="MyResumeBody">
            <div class="MyResumeTitle">
                <div class="MyResumeTitleRow">
                    <div class="MyResumeTitleRowBold">基本信息</div>
                    <div class="MyResumeTitleRowNormal"><span style="color: blue;">1</span>/3</div>
                </div>
                <div class="MyResumeTitleDetail">注意带<span style="color: red;">*</span>号为必填项</div>
            </div>
            <div class="MyResumeName">
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="basic-addon1">姓名<span
                                style="color: red;">*</span></span>
                    </div>
                    <input type="text" class="form-control MyResumeNameTextInput" placeholder="请输入" aria-label="Username"
                        aria-describedby="basic-addon1" id="MyPageCV-name">
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="basic-addon1">性别<span
                                style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeGenderBTN" type="button">
                            <img src="img/man.png">
                            <div class="MyResumeGenderBTNText">男</div>
                        </button>
                        <button class="btn MyResumeGenderBTN" type="button">
                            <img src="img/woman.png">
                            <div class="MyResumeGenderBTNText">女</div>
                        </button>
                    </div>
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween"
                    style="border-bottom: 0.5rem solid #f3f3f3;">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">出生年月<span style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeBirthdayBTN1">
                            <div class="MyResumeGenderBTNText" id="MyResumeBirthdayBTN">请选择</div>
                            <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                        </button>
                    </div>

                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="basic-addon1">最高学历<span
                                style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="HighestEducation">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png">
                        </button>
                    </div>

                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween"
                    style="border-bottom: 0.5rem solid #f3f3f3;">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="basic-addon1">工作经验<span
                                style="color: red;">*</span></span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="WorkExperience">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png">
                        </button>
                    </div>

                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween"
                    style="border-bottom: 0.5rem solid #f3f3f3;">
                    <div class="input-group-prepend">
                        <button class="btn MyResumeContactOption" type="button" id="SelectContactOptions">
                            <div>选择联系方式</div>
                            <img src="img/downarrow-blue.png">
                            <span style="color: red;">*</span>
                        </button>
                    </div>
                    <input type="text" class="form-control MyResumeNameTextInput" placeholder="请输入您的联系方式"
                        aria-label="Username" aria-describedby="basic-addon1">

                </div>
                <btn class="MyResumeAddAnotherContact" id="AddAnotherContactOptions">
                    添加其他联络方式
                </btn>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween" style="border-bottom: 0.5rem solid #f3f3f3;"
                    id="NewContactOptionsDiv">
                    <div class="input-group-prepend">
                        <div class="btn MyResumeContactOption" id="NewContactOptions">
                            <div>选择联系方式</div>
                        </div>
                    </div>
                    <input type="text" class="form-control MyResumeNameTextInput" placeholder="请输入您的联系方式"
                        aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <router-link :to="{ name: 'ProfileViewMyCv2' }">
                    <btn class="btn btn-list custom-sharebtn profile-myhireBTNs" type="button">
                        <btn class="MyResumeAddAnotherContact MypageNoCvNextBt1" id="AddAnotherContactOptions"
                            style="color: white;background-color: blue;bottom: 0;">
                            下一步
                        </btn>
                    </btn>
                </router-link>

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