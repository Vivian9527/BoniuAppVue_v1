<template>
    <div id="focusConBodyNews1" class="focusConBodyNews1">
        <div class="focusConBodyNewsPic">
            <img src="/img/defempty.png" />
            <div class="focusConBodyNewsText">
                <div>还没有关注的人</div>
                <div>关注之后下拉刷新试试吧</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#focusConBodyNews {
  padding: 20px;
}

.focusConBodyNewsPic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25%;
  margin-bottom: 25%;
}

.focusConBodyNewsPic img {
  width: 200px;
  height: 150px;
}

.focusConBodyNewsText {
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
}

.focusConBodyNewsText div:nth-child(1) {
  color: black;
  font-size: 20px;
}

.focusConBodyNewsText div:nth-child(2) {
  color: gray;
  font-size: 18px;
}

.focusConBodyNewsPic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25%;
  margin-bottom: 25%;
}

.focusConBodyNewsPic img {
  width: 200px;
  height: 150px;
}

#focusConBodyNews {
  padding: 20px;
}

#focusConBodyForum {
  padding: 20px;
}

.focusRecommend {
  border-bottom: #d0d0d0 1px solid;
  padding: 5%;
  margin-bottom: 30px;
}

/* .goodArticleRecommend {
    border-bottom: gray 1px solid;
    padding: 5%;
} */

.focusRecommendTitleDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.focusRecommendTitle {
  font-weight: bold;
  font-size: 20px;
}

#focusForumHaveContent a {
  text-decoration: none;
}

.focusRecommendChange img {
  height: 25px;
  width: 25px;
}

.focusRecommendChange span {
  color: gray;
  font-size: 15px;
}

.focusRecommendChange {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.focusRecommendCardPic img {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: inline !important;
}

.focusRecommendCard {
  background-color: #eeeded;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 水平居中 */
  text-align: center;
  /* 文本水平居中 */
  padding: 15px;
  margin: 3px;
}

.focusRecommendCard div:nth-child(2) {
  font-size: 15px;
  font-weight: bold;
  color: black;
  margin-top: 5px;
}

.focusRecommendCard div:nth-child(3) {
  font-size: 12px;
  font-weight: bold;
  color: gray;
  margin-top: 5px;
}

.focusRecommendCard div:nth-child(4) button {
  font-size: 12px;
  color: white;
  background-color: #0000ff;
  border-radius: 5px;
  margin-top: 5px;
  border: none;
}

.focusRecommendCard div:nth-child(4) button.focusButtonClicked {
  font-size: 12px;
  border-radius: 5px;
  margin-top: 5px;
  color: rgb(152, 152, 152);
  background-color: #c5c4c4;
}

// 文章
.newsCon {
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px gray solid;
}

.newsConLeft {
  height: 80px;
  width: 70%;
}

.newsConRight {
  height: 80px;
  width: 30%;
}

.newstag {
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  bottom: -25px;
}

.newstag span:nth-child(1) {
  color: gray;
}

.newstag span:nth-child(2) {
  color: red;
  border: 1px red solid;
}

.newsConRight {
  display: flex;
  justify-content: center;
}

.newsConRight img {
  object-fit: cover;
  /* 图片保持纵横比，完整显示在容器内 */
  width: 100px;
  /* 你希望的正方形大小 */
  height: 80px;
  /* 你希望的正方形大小 */
}
</style>