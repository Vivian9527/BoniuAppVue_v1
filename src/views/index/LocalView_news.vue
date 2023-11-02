<template>
  <!-- 新聞區塊 -->
  <div id="localConBodyNews" class="localConBodyNews">
    <!-- 有關注 -->
    <div id="focusConBodyNews2" class="focusConBodyNews2" v-if="gethomeLocalNEWSData && gethomeLocalNEWSData.length">
      <div id="focusNewsHaveContent">
        <router-link :to="{ name: 'article', params: { id: item.id } }" @click="$shareFunctions.SentArticleApi(item.id)" v-for="item in gethomeLocalNEWSData" :key="item.id">
          <div class="newsCon">
          <div class="newsConLeft">
            <div class="newsTitle">
              {{item.subject}}
            </div>
            <div class="newstag">
              <span>{{item.loc}}</span>
            </div>
          </div>
          <div class="newsConRight">
            <img :src="item.cover_pic" />
          </div>
        </div>
        </router-link>

      </div>
    </div>
    <!-- 沒有更多內容 -->
    <div id="localConBodyNews1" class="localConBodyNews1" v-else>
      <div class="localConBodyNewsPic">
        <img src="img/ic_list_empty.png" />
        <div id="localConBodyNewsText">暂无更多内容</div>
      </div>
      <!-- 推薦關注 -->
      <recommendFocus />
    </div>


  </div>
</template>

<style lang="scss" scoped>
@import "../../../public/css/index.css";
</style>

<script>

import { mapGetters } from "vuex";
import recommendFocus from "../../components/recommendFocus.vue";


export default {
  name: "LocalView_news",
  components: {
    recommendFocus,
  },
  computed: {
    ...mapGetters("ws", ["gethomeLocalNEWSData"]),
  },
  setup() {


    return {

    };
  },
};
</script>
