<template>
  <div id="focusConBodyNews">
    <!-- 有關注 -->
    <div id="focusConBodyNews2" class="focusConBodyNews2" v-if="gethomePushFollowNEWS">
      <router-link :to="{ name: 'article', params: { id: item.id } }" @click="$shareFunctions.SentArticleApi(item.id)"
        v-for="(item) in gethomePushFollowNEWS" :key="item.id">
        <div id="focusNewsHaveContent">
          <div class="newsCon">
            <div class="newsConLeft">
              <div class="newsTitle">
                {{ item.subject }}
              </div>
              <div class="newstag">
                <span>{{ item.name }}</span>
              </div>
            </div>
            <div class="newsConRight">
              <img :src="item.cover_pic" />
            </div>
          </div>
        </div>
      </router-link>
      <recommendFocus />
    </div>
    <!-- 沒有關注 -->
    <div v-else>
      <notFocus />
      <recommendFocus />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../public/css/index.css';
</style>

<script>
import { mapGetters } from "vuex";
import recommendFocus from "../../components/recommendFocus.vue";
import notFocus from "@/components/notFocus.vue";

export default {
  name: "FocusView_news",
  components: {
    recommendFocus,
    notFocus
  },
  computed: {
    ...mapGetters("ws", ["gethomePushFollower", "gethomePushFollowNEWS"]),
  },
  setup() {
    return {};
  },
};
</script>
