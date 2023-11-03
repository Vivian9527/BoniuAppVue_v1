// 在一个独立的模块 shareFunctions.js 中
import {
  send
} from "@/utils/socket";
import Cookies from "js-cookie";


const token = Cookies.get("token");

export function getUserContent(uid, index) {
  console.log("發出作者請求" + uid);
  const requestData = {
    apiName: "UserContent",
    token,
    uid,
    index,
  };
  send(requestData);
}

export function SentArticleApi(tid) {
  console.log("發出文章請求" + tid);
  const requestData = {
    apiName: "CommunityContent",
    token,
    tid,
  };
  send(requestData);
}

export function homeChoiceCategory(type) {
  console.log("發出精選內頁請求" + type);
  const requestData = {
    apiName: "homeChoiceCategory",
    token,
    type,
    index: 1,
    pageSize: 10,
  };
  send(requestData);
}

export function getAllPlateContent(fid, shaixuan, index) {
  console.log("發出論壇請求" + fid);
  const requestData = {
    apiName: "AllPlateContent",
    token,
    fid,
    shaixuan,
    index,
  };
  send(requestData);
}





// 推薦關注
export function homePushFollowerApi() {
  const requestData = {
    apiName: "homePushFollower",
    token,
  };
  send(requestData);
}

//關注主頁文章
export function homePushFollowApi(type) {
  const requestData = {
    apiName: "homePushFollow",
    token,
    type,
  };
  send(requestData);
}

// 推薦主頁文章
export function homeTuijianApi(type) {
  const requestData = {
    apiName: "homeTuijian",
    token,
    type,
    index: 1,
    pageSize: 10,
  };
  send(requestData);
}

// 取得 資訊頁面 api資料
export function gethomeInformation() {
  const requestData = {
    apiName: "homeInformation",
    token,
    index: 1,
    pageSize: 10,
  };
  send(requestData);
}

// 取得 精選頁面 api資料
export function gethomeChoice() {
  const requestData = {
    apiName: "homeChoice",
    token,
  };
  send(requestData);
}

// 取得 精選頁面分頁 api資料
export function gethomeChoiceCategory(type) {
  const requestData = {
    apiName: "homeChoiceCategory",
    token,
    type,
    index: 1,
    pageSize: 10,
  };
  send(requestData);
}

// 取得 本地頁面BBS api資料(獲取使用者位置後傳去後端在取得資料)
export function gethomeLocalBBS(local) {
  const requestData = {
    apiName: "homeLocal",
    token,
    loc: local,
    type: "bbs",
    index: 1,
    pageSize: 10,
  };
  send(requestData);
}

// 取得 本地頁面NEWS api資料(獲取使用者位置後傳去後端在取得資料)
export function gethomeLocalNews(local) {
  const requestData = {
    apiName: "homeLocal",
    token,
    loc: local,
    type: "news",
    index: 1,
    pageSize: 10,
  };
  send(requestData);
}

// 取得 商務頁面 api資料
export function gethomeBusiness(type) {
  const requestData = {
    apiName: "homeBusiness",
    token,
    type,
    index: 1,
    pageSize: 10,
  };
  send(requestData);
}
