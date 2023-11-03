<template>
    <!--勳章的offcanvas-->
    <div
      tabindex="-1"
      id="offcanvas-icon"
    >
      <div class="offcanvas-header icon-header">
        <button
          type="button"
          class="btn-close text-reset icon-close-button"
          @click="$router.go(-1)"
        >
          <img src="img/leftarrow.png" alt="Close" class="close-img" />
        </button>
      </div>
      <div class="offcanvas-body icon-body">
        <!--作者專區-->
        <div class="off-author">
          <div class="off-authorContainer">
            <img src="img/profilePic2.jpg" class="off-authorProfilePic" />
            <div class="off-authorTitle">
              <div class="off-authorName">Xiaoyou666</div>
              <div class="count-icon">
                <img src="img/icon4.png" />
                <div class="count-iconText">已获得88枚勋章</div>
              </div>
            </div>
          </div>
          <img src="img/icon4.png" class="off-authorIconImg" />
        </div>
  
        <!--博牛成長之路-->
        <div class="BNgrowth">
          <div class="growth-title">博牛成长之路</div>
          <div class="growth-img">
            <div class="growth-imgs" id="CommmunityGrowth-imgs">
              <img src="img/icon1.png" />
              <div class="growth-imgTitle">初来乍到</div>
              <div class="growth-imgText">达到10个勋章</div>
            </div>
            <div class="growth-imgs">
              <img src="img/icon2.png" />
              <div class="growth-imgTitle">略知一二</div>
              <div class="growth-imgText">达到30个勋章</div>
            </div>
            <div class="growth-imgs">
              <img src="img/icon3.png" />
              <div class="growth-imgTitle">略有小成</div>
              <div class="growth-imgText">达到50个勋章</div>
            </div>
            <div class="growth-imgs">
              <img src="img/icon4.png" />
              <div class="growth-imgTitle">心领神会</div>
              <div class="growth-imgText">达到80个勋章</div>
            </div>
          </div>
        </div>
        <!--TA的勳章-->
        <div class="BNicon">
          <div class="icon-title">TA的勋章</div>
          <div class="icon-img">
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">手办勋章：雅典娜</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon2.png" />
              <div class="icon-imgTitle">手办勋章：沙加</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon3.png" />
              <div class="icon-imgTitle">手办勋章：宁次</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">法拉利</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">手办勋章：雅典娜</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon2.png" />
              <div class="icon-imgTitle">手办勋章：沙加</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon3.png" />
              <div class="icon-imgTitle">手办勋章：宁次</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">法拉利</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">手办勋章：雅典娜</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon2.png" />
              <div class="icon-imgTitle">手办勋章：沙加</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon3.png" />
              <div class="icon-imgTitle">手办勋章：宁次</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">法拉利</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">手办勋章：雅典娜</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon2.png" />
              <div class="icon-imgTitle">手办勋章：沙加</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon3.png" />
              <div class="icon-imgTitle">手办勋章：宁次</div>
            </div>
            <div class="icon-imgs">
              <img src="img/icon1.png" />
              <div class="icon-imgTitle">法拉利</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style>
@import url('../../public/css/community.css');
</style>
  