<template>
  <div
    class="offcanvas offcanvas-fullscreen"
    tabindex="-1"
    id="offcanvas-UploadArticle"
    aria-labelledby="offcanvas-AllSections-label"
  >
    <div class="offcanvas-header profile-TGGroupHeader">
      <button
        type="button"
        class="text-reset custom-backbtn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <div>取消</div>
      </button>
      <div class="profile-TGGroupTitle">編輯內容</div>
      <button type="button" class="btn btn-primary" id="communityPublish">
        發表
      </button>
    </div>
    <!-- <div class="modal-body"> -->
    <div>
      <!-- 这里放模态框的内容 -->
      <div class="column">
        <div class="mb-3 input-group">
          <span class="input-group-text custom-input-group" id="basic-addon2"
            >选择分类</span
          >
          <btn
            class="btn btn-list custom-sharebtn profile-myhireBTNs SelectBTN"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-UploadArticleSelectSections1"
            aria-controls="offcanvasBottom"
          >
            <div>适合的分类会被更多人看到哦</div>
            <img src="img/rightarrow.png" class="selectpic" />
          </btn>
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control type-title border-0"
            id="exampleFormControlInput1"
            placeholder="请输入标题"
          />
        </div>
        <hr />
        <div class="mb-3 article">
          <textarea
            class="form-control border-0 article"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="从这里开始输入你的内容"
          ></textarea>
        </div>
        <div class="col">
          <label for="fileInput" class="custom-file-upload">
            <img
              src="img/photo_icon.png"
              alt="Upload Image"
              class="modal-img"
            />
          </label>
          <input
            type="file"
            id="fileInput"
            class="form-control"
            accept="image/*"
            style="display: none"
          />
        </div>
      </div>
    </div>
  </div>
</template>
