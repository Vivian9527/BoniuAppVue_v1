<template>
    <div class="">
        
        <div class="offcanvas-header profile-TGGroupHeader">
            <router-link :to="{ name: 'profile' }"> <button type="button" class=" text-reset custom-backbtn">
                <img src="img/back icon.png">
            </button></router-link>
            <div class="profile-TGGroupTitle">
                我的关注
            </div>
        </div>
        <div class="offcanvas-body profile-TGGroupBody">
            <div class="search-bar">
                <input type="text" class="search-input" placeholder="搜索用户">
                <img src="img/search.png" alt="Search Icon" class="search-icon">
            </div>
            <div class="profile-SubscribeList" v-if="getFocusUserData">
                <router-link v-for="item in getFocusUserData" :key="item.uid" :to="{ name: 'author', params: { id: item.uid } }"
                    @click="$shareFunctions.getUserContent(item.uid, 1)">
                    <a class="profile-SubscribeName">
                        <!-- BananaFish沒有圖片api -->
                        <img src="img/profilePic.jpg">
                        <div class="profile-SubscribeNameText">{{item.username}}</div>
                    </a>
                </router-link>

            </div>
            <div id="focusOffcanva" v-else>
                <div class="profile-SubscribeList">
                    <div class="profile-CompanyTitle">
                        <img src="img/ic_list_empty.png">
                        <div class="profile-CompanyTitles2">暂无更多内容</div>
                    </div>
                </div>
                <div class="profile-SubscribeListNone">
                    啊呀，到底啦！
                </div>
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
            "getFocusUserData",
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