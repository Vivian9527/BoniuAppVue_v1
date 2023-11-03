<template>
  <div>
    <!-- 標題 -->
    <div
      class="row border-bottom text-center titleContainer d-flex align-items-center"
    >
      <div
        class="col-1 closeOffcanvasBtn"
        id="backIndexBt"
        @click="$router.go(-1)"
      >
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
        </svg>
      </div>
      <div class="col-11" id="titleText">消息</div>
    </div>
    <!-- 選單內容  -->
    <div id="notificationSelect">
      <router-link :to="{ name: 'NotifiSonView', params: { id: 1 } }">
        <div
          class="row p-2 border-bottom notificationPage"
          data-bs-toggle="offcanvas"
          data-bs-target="#notificationSonPage1"
          aria-controls="offcanvasRight"
          data-bs-backdrop="true"
          id="notificationSonBt1"
        >
          <div class="col-2">
            <img
              class="notificationImg"
              src=" ../../public/img/ic_message_qa.png"
              alt=""
            />
          </div>
          <div class="col-8 d-flex align-items-center">
            <div>求职问答</div>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
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
      <router-link :to="{ name: 'NotifiSonView', params: { id: 2 } }">
        <div
          class="row p-2 border-bottom notificationPage"
          data-bs-toggle="offcanvas"
          data-bs-target="#notificationSonPage2"
          aria-controls="offcanvasRight"
          data-bs-backdrop="true"
          id="notificationSonBt2"
        >
          <div class="col-2">
            <img
              class="notificationImg"
              src=" ../../public/img/ic_message_comment.png"
              alt=""
            />
          </div>
          <div class="col-8 d-flex align-items-center">
            <div>评论</div>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
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
      <router-link :to="{ name: 'NotifiSonView', params: { id: 3 } }">
        <div
          class="row p-2 border-bottom notificationPage"
          data-bs-toggle="offcanvas"
          data-bs-target="#notificationSonPage3"
          aria-controls="offcanvasRight"
          data-bs-backdrop="true"
          id="notificationSonBt3"
        >
          <div class="col-2">
            <img
              class="notificationImg"
              src=" ../../public/img/ic_message_like.png"
              alt=""
            />
          </div>
          <div class="col-8 d-flex align-items-center">
            <div>点赞消息</div>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
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
      <router-link :to="{ name: 'NotifiSonView', params: { id: 4 } }">
        <div
          class="row p-2 border-bottom notificationPage"
          data-bs-toggle="offcanvas"
          data-bs-target="#notificationSonPage4"
          aria-controls="offcanvasRight"
          data-bs-backdrop="true"
          id="notificationSonBt4"
        >
          <div class="col-2">
            <img
              class="notificationImg"
              src=" ../../public/img/ic_message_follow.png"
              alt=""
            />
          </div>
          <div class="col-8 d-flex align-items-center">
            <div>关注消息</div>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
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
      <router-link :to="{ name: 'NotifiSonView', params: { id: 5 } }">
        <div
          class="row p-2 border-bottom notificationPage"
          data-bs-toggle="offcanvas"
          data-bs-target="#notificationSonPage5"
          aria-controls="offcanvasRight"
          data-bs-backdrop="true"
          id="notificationSonBt5"
        >
          <div class="col-2">
            <img
              class="notificationImg"
              src=" ../../public/img/ic_message_system.png"
              alt=""
            />
          </div>
          <div class="col-8 d-flex align-items-center">
            <div>官方消息</div>
          </div>
          <div class="col-2 d-flex align-items-center justify-content-center">
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
  <!-- 選單內頁offcanva -->

  <div>
    <div
      class="offcanvas offcanvas-fullscreen"
      tabindex="-1"
      id="notificationSonPage1"
      aria-labelledby="notificationSonPage1-label"
    >
      <div class="offcanvas-body icon-body">
        <div>
          <!-- 標題 -->
          <div
            class="row border-bottom text-center titleContainer d-flex align-items-center"
          >
            <div class="col-1" data-bs-dismiss="offcanvas" aria-label="Close">
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
              </svg>
            </div>
            <div class="col-11" id="titleText2">企業问答</div>
          </div>
          <!-- 內容區 -->
          <div id="notificationSonPageMainCon1">
            <!-- 無內容 -->
            <div id="notificationSonPageNotCon1" class="localConBodyForum1">
              <div class="localConBodyForumPic">
                <img src="../../public/img/ic_list_empty.png" />

                <div class="localConBodyForumText">暂无更多内容</div>
              </div>
            </div>

            <!-- 有內容 -->
            <div id="notificationSonPageHasCon1" class="divNone"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-fullscreen"
      tabindex="-1"
      id="notificationSonPage2"
      aria-labelledby="notificationSonPage2-label"
    >
      <div class="offcanvas-body icon-body">
        <div>
          <!-- 標題 -->
          <div
            class="row border-bottom text-center titleContainer d-flex align-items-center"
          >
            <div class="col-1" data-bs-dismiss="offcanvas" aria-label="Close">
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
              </svg>
            </div>
            <div class="col-11" id="titleText2">評論消息</div>
          </div>
          <!-- 內容區 -->
          <div id="notificationSonPageMainCon2">
            <!-- 無內容 -->
            <div id="notificationSonPageNotCon2" class="localConBodyForum1">
              <div class="localConBodyForumPic">
                <img src=" ../../public/img/ic_list_empty.png" />
                <div class="localConBodyForumText">暂无更多内容</div>
              </div>
            </div>

            <!-- 有內容 -->
            <div id="notificationSonPageHasCon2" class="divNone"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-fullscreen"
      tabindex="-1"
      id="notificationSonPage3"
      aria-labelledby="notificationSonPage3-label"
    >
      <div class="offcanvas-body icon-body">
        <div>
          <!-- 標題 -->
          <div
            class="row border-bottom text-center titleContainer d-flex align-items-center"
          >
            <div class="col-1" data-bs-dismiss="offcanvas" aria-label="Close">
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
              </svg>
            </div>
            <div class="col-11" id="titleText2">讚了我</div>
          </div>
          <!-- 內容區 -->
          <div id="notificationSonPageMainCon3">
            <!-- 無內容 -->
            <div id="notificationSonPageNotCon3" class="localConBodyForum1">
              <div class="localConBodyForumPic">
                <img src=" ../../public/img/ic_list_empty.png" />
                <div class="localConBodyForumText">暂无更多内容</div>
              </div>
            </div>

            <!-- 有內容 -->
            <div id="notificationSonPageHasCon3" class="divNone"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-fullscreen"
      tabindex="-1"
      id="notificationSonPage4"
      aria-labelledby="notificationSonPage4-label"
    >
      <div class="offcanvas-body icon-body">
        <div>
          <!-- 標題 -->
          <div
            class="row border-bottom text-center titleContainer d-flex align-items-center"
          >
            <div class="col-1" data-bs-dismiss="offcanvas" aria-label="Close">
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
              </svg>
            </div>
            <div class="col-11" id="titleText2">關注消息</div>
          </div>
          <!-- 內容區 -->
          <div id="notificationSonPageMainCon4">
            <!-- 無內容 -->
            <div id="notificationSonPageNotCon4" class="localConBodyForum1">
              <div class="localConBodyForumPic">
                <img src=" ../../public/img/ic_list_empty.png" />
                <div class="localConBodyForumText">暂无更多内容</div>
              </div>
            </div>

            <!-- 有內容 -->
            <div id="notificationSonPageHasCon4" class="divNone"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-fullscreen"
      tabindex="-1"
      id="notificationSonPage5"
      aria-labelledby="notificationSonPage5-label"
    >
      <div class="offcanvas-body icon-body">
        <div>
          <!-- 標題 -->
          <div
            class="row border-bottom text-center titleContainer d-flex align-items-center"
          >
            <div class="col-1" data-bs-dismiss="offcanvas" aria-label="Close">
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
              </svg>
            </div>
            <div class="col-11" id="titleText2">官方消息</div>
          </div>
          <!-- 內容區 -->
          <div id="notificationSonPageMainCon5">
            <!-- 無內容 -->
            <div id="notificationSonPageNotCon5" class="localConBodyForum1">
              <div class="localConBodyForumPic">
                <img src=" ../../public/img/ic_list_empty.png" />
                <div class="localConBodyForumText">暂无更多内容</div>
              </div>
            </div>

            <!-- 有內容 -->
            <div id="notificationSonPageHasCon5" class="divNone"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("../../public/css/notification.css");
</style>
