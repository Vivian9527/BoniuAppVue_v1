<template>
  <div
    id="tab2"
    class="tab-pane fade show active tab-content"
    role="tabpanel"
    aria-labelledby="tab2-tab"
  >
    <div class="main2">
      <!--切換國家-->
      <div class="switch">
        <div class="place">
          <img src="img/ic_discover_local_location.png" class="place-icon" />
          <div id="tab2-title">菲律宾</div>
        </div>
        <div id="SwitchLocation2" style="color: gray; margin-right: -4rem">
          切换国家 ＞
        </div>
        <!-- 選擇處這邊綁上id="SwitchLocation" -->
      </div>

      <!-- <div id="SwitchLocation"></div> -->
      <!-- 上面這一段不要 -->

      <!--二手交易區塊-->
      <div id="communityPbutton" class="pbutton">
        <div class="pbuttons">
          <img src="img/二手.png" />
          <div class="pbutton-title">二手交易</div>
        </div>
        <div class="pbuttons">
          <img src="img/外賣.jfif" />
          <div class="pbutton-title">外卖点餐</div>
        </div>
        <div class="pbuttons">
          <img src="img/租房.jfif" />
          <div class="pbutton-title">租房买卖</div>
        </div>
        <div class="pbuttons">
          <img src="img/攻略.jpg" />
          <div class="pbutton-title">菲国攻略</div>
        </div>
      </div>

      <!--各國tg群按鈕-->
      <div id="communityCountryBtn" class="country-btn">
        <div id="communityCountryBtnTitle" class="country-btnTitle">
          在菲圈子
        </div>
        <div id="communityCountryBtnSon">
          <div class="btns-row">
            <a href="https://t.me/boniush365" class="tg-btn">
              <div class="country-btns">
                <img src="img/生活.jpg" />
                <div class="country-btnsTitle">生活产业交流</div>
              </div>
            </a>
            <a href="https://t.me/boniush365" class="tg-btn">
              <div class="country-btns">
                <img src="img/安危.jpg" />
                <div class="country-btnsTitle">安危事件</div>
              </div>
            </a>
            <a href="https://t.me/boniush365" class="tg-btn">
              <div class="country-btns">
                <img src="img/新聞.jpg" />
                <div class="country-btnsTitle">新闻频道</div>
              </div>
            </a>
            <a href="https://t.me/boniush365" class="tg-btn">
              <div class="country-btns">
                <img src="img/換匯.jpg" />
                <div class="country-btnsTitle">便民换汇</div>
              </div>
            </a>
            <a href="https://t.me/boniush365" class="tg-btn">
              <div class="country-btns">
                <img src="img/外賣.jpg" />
                <div class="country-btnsTitle">美食外卖资讯</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!--熱門推薦-->
      <div class="hot">热门推荐</div>
      <div class="authorContainer" id="authorContainer">
        <div class="authorCon">
          <div class="authorInfo">
            <img class="authorImg" src="img/profilePic.jpg" />
            <div class="authorText">
              <div class="authorName">ChloeCC</div>
              <div class="authorIdentity">版主</div>
            </div>
            <button
              class="btn btn-list custom-Commenticonbtn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-icon2"
              aria-controls="offcanvasRight"
              data-bs-backdrop="true"
            >
              <img src="img/勳章.png" class="author-icon" />
              <span class="icon-level">90</span>
            </button>
          </div>
          <div class="articleContent">
            <span>
              這將創建一個無填充顏色的按鈕，並在其上方添加白色邊框，以便更好地看到按鈕的區域。你可以根據需要進一步自定義按鈕的樣式。
            </span>
            <span class="viewMore">查看全文</span>
            <div class="imgsCons"></div>
          </div>
          <div class="shareCon">
            <div class="row">
              <div class="col-6">
                <button class="discussion mt-2">
                  <img src="img/circle_detail_post_comment_big.png" />
                  <span>综合讨论区</span>
                </button>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-4">
                    <button
                      class="btn btn-list shareButton"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-share2"
                      aria-controls="offcanvasBottom"
                    >
                      <img src="img/circle_detail_post_share.png" />
                      <span>分享</span>
                    </button>
                  </div>
                  <div class="col-4">
                    <a href="article.html">
                      <button class="btn">
                        <img src="img/circle_detail_post_comment_big.png" />
                        <span>20</span>
                      </button>
                    </a>
                  </div>
                  <div class="col-4">
                    <button class="btn likeButton">
                      <img
                        src="img/ic_circle_detail_post_like_d.png"
                        class="likeImage"
                      />
                      <span class="likeCount">1</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="authorCon">
          <div class="authorInfo">
            <img class="authorImg" src="img/profilePic.jpg" />
            <div class="authorText">
              <div class="authorName">ChloeCC</div>
              <div class="authorIdentity">版主</div>
            </div>
            <button
              class="btn btn-list custom-Commenticonbtn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-icon2"
              aria-controls="offcanvasRight"
              data-bs-backdrop="true"
            >
              <img src="img/勳章.png" class="author-icon" />
              <span class="icon-level">90</span>
            </button>
          </div>
          <div class="articleContent">
            <span>
              這將創建一個無填充顏色的按鈕，並在其上方添加白色邊框，以便更好地看到按鈕的區域。你可以根據需要進一步自定義按鈕的樣式。
            </span>
            <span class="viewMore">查看全文</span>
            <div class="imgsCons"></div>
          </div>
          <div class="shareCon">
            <div class="row">
              <div class="col-6">
                <button class="discussion mt-2">
                  <img src="img/circle_detail_post_comment_big.png" />
                  <span>综合讨论区</span>
                </button>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-4">
                    <button
                      class="btn btn-list shareButton"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-share2"
                      aria-controls="offcanvasBottom"
                    >
                      <img src="img/circle_detail_post_share.png" />
                      <span>分享</span>
                    </button>
                  </div>
                  <div class="col-4">
                    <a href="article.html">
                      <button class="btn">
                        <img src="img/circle_detail_post_comment_big.png" />
                        <span>20</span>
                      </button>
                    </a>
                  </div>
                  <div class="col-4">
                    <button class="btn likeButton">
                      <img
                        src="img/ic_circle_detail_post_like_d.png"
                        class="likeImage"
                      />
                      <span class="likeCount">1</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="authorCon">
          <div class="authorInfo">
            <img class="authorImg" src="img/profilePic.jpg" />
            <div class="authorText">
              <div class="authorName">ChloeCC</div>
              <div class="authorIdentity">版主</div>
            </div>
            <button
              class="btn btn-list custom-Commenticonbtn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-icon2"
              aria-controls="offcanvasRight"
              data-bs-backdrop="true"
            >
              <img src="img/勳章.png" class="author-icon" />
              <span class="icon-level">90</span>
            </button>
          </div>
          <div class="articleContent">
            <span>
              這將創建一個無填充顏色的按鈕，並在其上方添加白色邊框，以便更好地看到按鈕的區域。你可以根據需要進一步自定義按鈕的樣式。
            </span>
            <span class="viewMore">查看全文</span>
            <div class="imgsCons"></div>
          </div>
          <div class="shareCon">
            <div class="row">
              <div class="col-6">
                <button class="discussion mt-2">
                  <img src="img/circle_detail_post_comment_big.png" />
                  <span>综合讨论区</span>
                </button>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-4">
                    <button
                      class="btn btn-list shareButton"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-share2"
                      aria-controls="offcanvasBottom"
                    >
                      <img src="img/circle_detail_post_share.png" />
                      <span>分享</span>
                    </button>
                  </div>
                  <div class="col-4">
                    <a href="article.html">
                      <button class="btn">
                        <img src="img/circle_detail_post_comment_big.png" />
                        <span>20</span>
                      </button>
                    </a>
                  </div>
                  <div class="col-4">
                    <button class="btn likeButton">
                      <img
                        src="img/ic_circle_detail_post_like_d.png"
                        class="likeImage"
                      />
                      <span class="likeCount">1</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--share的offcanvas-->
      <div
        class="offcanvas offcanvas-bottom sharingbox"
        tabindex="-1"
        id="offcanvas-share2"
        aria-labelledby="offcanvas-share"
      >
        <div class="offcanvas-body small sharingbox-body">
          <!--分享到TG的檔案在article.js-->
          <button
            type="button"
            class="btn btn-primary custom-TGbtn"
            style="width: 50%"
            onclick="shareToTelegram()"
          >
            <img
              src="img/ic_share_telegram.png"
              alt="Telegram"
              class="share-img"
            />
          </button>
          <!--複製文章連結的檔案在article.js-->
          <button
            type="button"
            class="btn btn-secondary custom-Linkbtn"
            style="width: 50%"
            onclick="copyArticleLink()"
          >
            <img
              src="img/ic_share_copy_link.png"
              alt="Copy Link"
              class="share-img"
            />
          </button>
        </div>
        <div class="offcanvas-footer sharingbox-footer" style="width: 100%">
          <span
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            class="closeSharingbox"
            >取消</span
          >
        </div>
      </div>

      <!--勳章的offcanvas-->
      <div
        class="offcanvas offcanvas-fullscreen2"
        tabindex="-1"
        id="offcanvas-icon2"
        aria-labelledby="offcanvas-icon-label"
      >
        <div class="offcanvas-header icon-header">
          <button
            type="button"
            class="btn-close text-reset icon-close-button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
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
              <div class="growth-imgs">
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

      <!--發布文章-選擇板塊offcanvas-->
      <div
        class="offcanvas offcanvas-fullscreen"
        tabindex="-1"
        id="offcanvas-UploadArticleSelectSections1"
        aria-labelledby="offcanvas-AllSections-label"
      >
        <div class="offcanvas-header profile-TGGroupHeader">
          <button
            type="button"
            class="text-reset custom-backbtn"
            id="closeUploadArticleSelectSections1"
          >
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
    </div>
  </div>
</template>
