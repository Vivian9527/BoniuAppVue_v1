<template>
  <div id="SelectedConBig" v-if="gethomeChoiceData">
    <router-link :to="{ name: 'selectInsidePage', params: { id: item.sid } }"
      @click="$shareFunctions.homeChoiceCategory(item.sid)" v-for="(item) in gethomeChoiceData" :key="item.sid">
      <div class="SelectedCon" :style="'background-image: url(' + item.picPath + ')'">
        <div class="SelectedText">
          <div>{{item.tltle}}</div>
          <div>{{item.contentCnt}}篇精选专题帖子</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
@import "../../../public/css/index.css";

#SelectedConBig {
  margin-top: 5%;
  padding: 5%;
}
.SelectedCon{
  margin-top: 3%;
}
</style>

<script>
import { mapGetters } from "vuex";


export default {
  name: "SelectView",
  components: {},
  computed: {
    ...mapGetters("ws", ["gethomeChoiceData"]),
  },
  setup() {





    return {


    };
  },
};
</script>
