<template>
      <div>
        <router-link :to="{ name: 'ProfileViewMyCv' }">
            <div class="offcanvas-header profile-TGGroupHeader" style="background-color: #f3f3f3;">
                <btn type="button" class=" text-reset custom-backbtn">
                    <img src="img/back icon.png">
                </btn>
            </div>
        </router-link>
        <div class="MyResumeBody">
            <div class="MyResumeTitle">
                <div class="MyResumeTitleRow">
                    <div class="MyResumeTitleRowBold">其他信息</div>
                    <div class="MyResumeTitleRowNormal"><span style="color: blue;">2</span>/3</div>
                </div>
                <div class="MyResumeTitleDetail">注意带<span style="color: red;">*</span>号为必填项</div>
            </div>
            <div class="MyResumeName">
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">国籍</span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeCountryBTN1">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                        </button>
                    </div>
                
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">现居地</span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <button class="btn MyResumeBirthdayBTN" type="button" id="MyResumeCorrentCountryBTN">
                            <div class="MyResumeGenderBTNText">请选择</div>
                            <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                        </button>
                    </div>
               
                </div>
                <div class="input-group MyResumeGenderBTNContainerSpaceBetween"
                    style="border-bottom: 0.5rem solid #f3f3f3;">
                    <div class="input-group-prepend">
                        <span class="input-group-text MyResumeNameText" id="MyResumeBirthday"
                            style="z-index: 10000;">语言背景</span>
                    </div>
                    <div class="input-group-append MyResumeGenderBTNContainer">
                        <btn class="btn btn-list custom-sharebtn profile-myhireBTNs publish-button"
                            style="font-size: 1.1rem;" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas-MyResumeLanguage" aria-controls="offcanvasBottom">
                            <button class="btn MyResumeBirthdayBTN" type="button">
                                <div class="MyResumeGenderBTNText" id="MyResumeBirthdayBTN">请选择</div>
                                <img src="img/rightarrow.png" id="MyResumeBirthdayBTNImg">
                            </button>
                        </btn>
                    </div>
                </div>
                <router-link :to="{ name: 'ProfileViewMyCv3' }">
                    <btn class="btn btn-list custom-sharebtn profile-myhireBTNs" type="button">
                    <btn class="MyResumeAddAnotherContact MypageNoCvNextBt2" id="AddAnotherContactOptions"
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