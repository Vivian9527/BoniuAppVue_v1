<template>
  <div>
    <!-- 標題 -->
    <div
      class="row border-bottom text-center titleContainer d-flex align-items-center"
    >
      <router-link :to="{ name: 'NotifiView' }">
        <div class="col-1 closeOffcanvasBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg></div
      ></router-link>

      <div class="col-11" id="titleText2">{{ Title }}</div>
    </div>
    <!-- 內容區 -->
    <div id="notificationSonPageMainCon">
      <!-- 有內容 -->
      <div
        id="notificationSonPageHasCon"
        v-if="wsGetterValue && wsGetterValue.length > 0"
      >
        <div
          class="notificationSonPageHasConSon"
          v-for="item in wsGetterValue"
          :key="item.tid"
        >
          <div class="date">
            {{ $otherToolFunction.changeTime(item.dateline) }}
          </div>
          <div class="outsideContainer">
            <div class="insideContentTitle">{{ item.subject }}</div>
            <div class="insideContent">{{ item.subject }}</div>
            <router-link
              :to="{ name: 'article', params: { id: item.tid } }"
              @click="$shareFunctions.SentArticleApi(item.tid)"
            >
              <div class="row hrLine">
                <div class="col-11 mt-3">查看詳情</div>
                <div class="col-1 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 無內容 -->
      <div id="notificationSonPageNotCon" class="localConBodyForum1" v-else>
        <div class="localConBodyForumPic">
          <img src="../../public/img/ic_list_empty.png" />
          <div class="localConBodyForumText">暂无更多内容</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("../../public/css/notificationSonPage.css");
</style>
<script>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const routeParams = route.params;
    const store = useStore();
    let wsGetterValue = ref(null); // 使用 ref 定义响应式变量
    let Title = ref("");

    switch (routeParams.id) {
      case "1":
        wsGetterValue = computed(() => store.getters["ws/getFirmsAnswerData"]);
        if (wsGetterValue.value == "尚無企業回復") {
          wsGetterValue = 0;
          Title = "企業問答";
        }

        break;
      case "2":
        wsGetterValue = computed(() => store.getters["ws/getinformationData"]);
        Title = "評論消息";
        wsGetterValue = 0;

        break;
      case "3":
        wsGetterValue = computed(() => store.getters["ws/getFollowNewsData"]);
        Title = "讚了我";
        wsGetterValue = 0;
        break;
      case "4":
        wsGetterValue = computed(() => store.getters["ws/getMyFavoriteData"]);
        Title = "關注消息";
        wsGetterValue = 0;
        break;
      case "5":
        wsGetterValue = computed(() => store.getters["ws/getOfficialNewsData"]);
        Title = "官方消息";
        break;
      default:
        console.log("no data");
    }

    return {
      wsGetterValue, // 在 setup 函数外部定义 getterValue
      Title,
    };
  },
};
</script>
