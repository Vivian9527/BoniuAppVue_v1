<template>
    <!-- 論壇區塊 -->
    <div id="localConBodyForum">
      <!-- 沒有更多內容 -->
      <div id="localConBodyForum1" class="localConBodyForum1">
        <div class="localConBodyForumPic">
          <img src="../../public/img/ic_list_empty.png" />
          <div id="localConBodyForumText">暂无更多内容</div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
 #localConBodyForum {
  margin-top: 10px;
  width: auto;
}
.localConBodyForum1 {
  display: flex;
  align-items: center;
  /* 垂直居中对齐 */
  justify-content: center;
}
.localConBodyForumPic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#localConBodyForumText {
  color: gray;
  font-size: 25px;
}

  </style>