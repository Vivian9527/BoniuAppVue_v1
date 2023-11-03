<template>
    <div>
        <div class="offcanvas-header profile-TGGroupHeader">
            <router-link :to="{ name: 'profile' }"> <button type="button" class=" text-reset custom-backbtn">
                <img src="img/back icon.png">
            </button></router-link>
            <div class="profile-TGGroupTitle">
                我的收藏
            </div>
        </div>
        <div class="offcanvas-body profile-TGGroupBody">
            <div class="profile-CompanyTitle">
                <img src="img/ic_list_empty.png">
                <div class="profile-CompanyTitles2">暂无更多内容</div>
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
            "getFavorite2Data",
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