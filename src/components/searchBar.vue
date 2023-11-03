<template>
  <div class="container-fluid narbar fixed-navbar border-bottom">
    <div class="row mb-3 pt-3">

      <div class="col-10">
        <label id="searchDiv" class="d-flex flex-grow-1">
          <img src="/img/search.png" alt="Search" width="15" height="15" />
          <router-link :to="{ name: 'Search1' }"> <input id="searchInput"
              class="form-control flex-grow-1 rounded-5 border-0" type="search" placeholder="搜索"
              aria-label="Search" /></router-link>

        </label>
      </div>

      <div class="col-2" id="notificationEnter">
        <router-link :to="{ name: 'NotifiView' }" @click="sentAllNotiAPi()">
          <img id="letterImg" src="/img/letter.png" alt="Letter" width="30" height="30" class="mt-2 me-5" />
        </router-link>

      </div>


    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '../../public/css/index.css';
</style>
<script>

import * as shareFunctions from "@/utils/notifiFun"; // 确保路径正确

export default {

  setup() {
    function sentAllNotiAPi() {
      shareFunctions.getFirmsAnswer()
      shareFunctions.getInforMation()
      shareFunctions.getMyArticles()
      shareFunctions.getFollowNews()
      shareFunctions.getOfficialNews()

    }



    return {
      sentAllNotiAPi
    };
  },
};
</script>


