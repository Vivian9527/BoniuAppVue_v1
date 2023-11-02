<template>
        <div class="tab-container">
      <div class="d-flex flex-column flex-grow-1 navtab-container">
        <ul class="nav nav-tabs mt-auto" id="myTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active footerDiv" id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab"
              aria-controls="tab1" aria-selected="true">
              <img class="footerIcon" src="img/ic_main_home_normal.png">
              <span class="footerText">
                首页
              </span>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link footerDiv" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2"
              aria-selected="false">
              <img class="footerIcon" src="img/ic_main_zp_normal.png">
              <span class="footerText">
                招聘
              </span>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link footerDiv" id="tab3-tab" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3"
              aria-selected="false">
              <img class="footerIcon" src="img/ic_main_discover_normal.png">
              <!-- <img class="footerIcon" src="../../../public/img/ic_main_discover_normal.png"> -->
              <span class="footerText">
                社区
              </span>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link footerDiv" id="tab4-tab" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4"
              aria-selected="false">
              <img class="footerIcon" src="img/ic_main_mine_normal.png">
              <span class="footerText">
                我的
              </span>
            </a>
          </li>
        </ul>
      </div>
      </div>
</template>
<style scoped>
@import url('../../public/css/index.css');
</style>