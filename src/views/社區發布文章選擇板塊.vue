<template>
     <!--發布文章-選擇板塊offcanvas-->
     <div class="offcanvas offcanvas-fullscreen" tabindex="-1" id="offcanvas-UploadArticleSelectSections1"
            aria-labelledby="offcanvas-AllSections-label">
            <div class="offcanvas-header profile-TGGroupHeader">
              <button type="button" class="text-reset custom-backbtn" id="closeUploadArticleSelectSections1">
                <!-- <button type="button" class=" text-reset custom-backbtn" data-bs-dismiss="offcanvas"
                            aria-label="Close"> -->
                <img src="img/back icon.png" />
              </button>
              <div class="profile-TGGroupTitle">全部板块</div>
            </div>
            <main>
              <div class="left">
                <div id="SelectCountryList" class="countrys">
                  <div class="Scountry" data-tab="tab20">综合讨论区</div>
                  <div class="Scountry" data-tab="tab21">产业综合</div>
                  <div class="Scountry" data-tab="tab22">在菲攻略</div>
                  <div class="Scountry" data-tab="tab23">招聘专区</div>
                </div>
              </div>
              <div class="right">
                <div id="SelectCityListR" class="cityList">
                  <div id="tab20">
                    <div class="cityTitle">综合讨论区</div>
                    <div class="grid-center" id="communityAllSectionE">
                      <div class="grid-sectionBTNs">
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">综合讨论区</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">灌水闲聊</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">每日一摸</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">娱乐影音</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">热门活动</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">求助问答</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">博牛群书</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">黑点爆料</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">安危事件</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab21" class="grid-center">
                    <div class="cityTitle">产业综合</div>
                    <div class="grid-center" id="communityAllSectionF">
                      <div class="grid-sectionBTNs">
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">产业综合</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">迪拜</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">乌克兰</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">柬埔寨</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">泰国</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">马来西亚</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">棋牌捕鱼</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">真人视讯</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">彩票</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">电竞</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">北塞浦路斯</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab22" class="grid-center">
                    <div class="cityTitle">在菲攻略</div>
                    <div class="grid-center" id="communityAllSectionG">
                      <div class="grid-sectionBTNs">
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">在菲攻略</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">外卖点餐</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">房屋交易</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">摄影街拍</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">生活黄页</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">小额换汇</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">菲律宾签证</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">菲游不可</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">商品交易</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab23" class="grid-center">
                    <div class="cityTitle">招聘专区</div>
                    <div class="grid-center" id="communityAllSectionH">
                      <div class="grid-sectionBTNs">
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">招聘专区</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">求职推荐</div>
                        </div>
                        <div class="sectionBTNs">
                          <img src="img/common_422_icon.png" />
                          <div class="sectionBTNsText">岗位交流</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
</template>