// socket.js
import {
  ref
} from "vue";
import store from "../store";
import Cookies from "js-cookie"; // 导入 js-cookie

const wsUrl = process.env.VUE_APP_API_URL;
let socket = null; // 将 socket 初始化为 null

const wsData = ref({
  message: null,
  error: null,
});

function connect() {
  socket = new WebSocket(wsUrl);

  socket.onopen = function () {
    console.log("建立連線");
    // 连接已建立，发送你的 API 请求
    const requestData = {
      apiName: "login",
      username: "vivian9527",
      password: "vivian95279527",
    };
    socket.send(JSON.stringify(requestData));
  };

  socket.onmessage = function (msg) {
    wsData.value.message = msg.data;
    // console.log(msg.data);

    const data = JSON.parse(msg.data);
    // 登入
    if (data.apiName === "login") {
      if (data.status) {
        console.log("登入成功");
        store.commit("ws/ws/login", data.data);
        Cookies.set("token", data.data.token, {
          expires: 7,
        }); // 'token' 是 Cookie 的名称，expires 表示过期时间（天）
      } else {
        console.log(data.info);
      }

      // 设置了命名空间（namespaced: true），你需要在提交 mutations 时包括命名空间，以便 Vuex 知道要调用哪个模块的 mutation。
    }
    // 首頁-關注
    if (data.apiName === "homePushFollower") {
      store.commit("ws/ws/homePushFollower", data.data);
    }
    if (data.apiName === "homePushFollow") {
      if (data.data[0].type == "bbs") {
        store.commit("ws/ws/homePushFollowBBS", data.data);
      } else if (data.data[0].type == "news") {
        store.commit("ws/ws/homePushFollowNEWS", data.data);
      }
    }
    // 首頁-推薦
    if (data.apiName === "homeTuijianArticle") {
      store.commit("ws/ws/homeTuijianArticle", data.data);
    }
    if (data.apiName === "homeTuijianJob") {
      store.commit("ws/ws/homeTuijianJob", data.data);
    }
    if (data.apiName === "homeTuijianBanner") {
      store.commit("ws/ws/homeTuijianBanner", data.data);
    }
    if (data.apiName === "homeTuijianAd") {
      store.commit("ws/ws/homeTuijianAd", data.data);
    }
    //首頁-資訊
    if (data.apiName === "homeInformationArticle") {
      store.commit("ws/ws/homeInformationArticle", data.data);
    }
    if (data.apiName === "homeInformationAd") {
      store.commit("ws/ws/homeInformationAd", data.data);
    }
    //首頁-本地
    if (data.apiName === "homeLocal") {
      if (data.data[0].type == "bbs") {
        store.commit("ws/ws/homeChoiceBBS", data.data);
      } else if (data.data[0].type == "news") {
        store.commit("ws/ws/homeChoiceNEWS", data.data);
      }
    }
    //首頁-精選
    if (data.apiName === "homeChoice") {
      store.commit("ws/ws/homeChoice", data.data);
    }
    if (data.apiName === "homeChoiceCategory") {
      store.commit("ws/ws/homeChoiceCategory", data.data);
    }
    //首頁-商務
    if (data.apiName === "homeBusiness") {
      if (data.data.type == 1) {
        store.commit("ws/ws/homeBusinessA", data.data.list);
      } else if (data.data.type == 2) {
        store.commit("ws/ws/homeBusinessB", data.data.list);
      } else if (data.data.type == 3) {
        store.commit("ws/ws/homeBusinessC", data.data.list);
      } else if (data.data.type == 4) {
        store.commit("ws/ws/homeBusinessD", data.data.list);
      }
    }

    // 文章內文
    if (data.apiName === "CommunityContent") {
      store.commit("ws/ws/article", {
        tid: data.data.articles[0].tid,
        data: data.data,
      });
    }
    if (data.apiName === "RelatedThread") {
      store.commit("ws/ws/RelatedThread", data.data);
    }
    // 作者內頁
    if (data.apiName === "userInfo") {
      store.commit("ws/ws/authorInfo", {
        authorId: data.data[0].uid,
        data: data.data,
      });
    }
    if (data.apiName === "movement") {
      store.commit("ws/ws/movement", {
        authorId: data.data[0].uid,
        data: data.data,
      });
    }
    if (data.apiName === "photos") {
      //Banana(沒有uid)
      store.commit("ws/ws/photos", {
        authorId: data.data.uid,
        data: data.data,
      });
    }
    if (data.apiName === "fans") {
      store.commit("ws/ws/fans", {
        authorId: data.data.uid,
        data: data.data,
      });
    }
    if (data.apiName === "follow") {
      store.commit("ws/ws/follow", {
        authorId: data.data.uid,
        data: data.data,
      });
    }
    //論壇內頁
    if (data.apiName === "Plate") {
      store.commit("ws/ws/Plate", {
        fid: data.data[0].id,
        data: data.data,
      });
    }
    if (data.apiName === "AllPlateContent") {
      store.commit("ws/ws/AllPlateContent", data.data);
    }
    //通知
    if (data.apiName === "FirmsAnswer") {
      store.commit("ws/ws/FirmsAnswer", data.data);
    }
    if (data.apiName === "information") {
      store.commit("ws/ws/information", data.data);
    }
    if (data.apiName === "FollowNews") {
      store.commit("ws/ws/FollowNews", data.data);
    }
    if (data.apiName === "MyFavorite") {
      store.commit("ws/ws/MyFavorite", data.data);
    }
    if (data.apiName === "OfficialNews") {
      store.commit("ws/ws/OfficialNews", data.data);
    }

    //朝聘
    if (data.apiName === "job") {
      store.commit("ws/ws/job", data.data);
    }
    if (data.apiName === "newjob") {
      store.commit("ws/ws/newjob", data.data);
    }
    if (data.apiName === "hire_banner") {
      store.commit("ws/ws/hire_banner", data.data);
    }
    if (data.apiName === "mans") {
      store.commit("ws/ws/mans", data.data);
    }
    if (data.apiName === "userFirm") {
      store.commit("ws/ws/userFirm", data.data);
    }
    if (data.apiName === "place") {
      store.commit("ws/ws/place", data.data);
    }
    if (data.apiName === "topPost") {
      store.commit("ws/ws/topPost", data.data);
    }
    if (data.apiName === "other") {
      store.commit("ws/ws/other", data.data);
    }
    if (data.apiName === "newjobpost") {
      store.commit("ws/ws/newjobpost", data.data);
    }
    if (data.apiName === "firmspostQuery") {
      store.commit("ws/ws/firmspostQuery", data.data);
    }
    if (data.apiName === "job_typeAll") {
      store.commit("ws/ws/job_typeAll", data.data);
    }
    if (data.apiName === "job_jobcontent") {
      store.commit("ws/ws/job_jobcontent", data.data);
    }

    // 社區
    if (data.apiName === "PlateIndex") {
      store.commit("ws/ws/PlateIndex", data.data);
    }
    if (data.apiName === "userPlate") {
      store.commit("ws/ws/userPlate", data.data);
    }
    if (data.apiName === "CommunityHot") {
      store.commit("ws/ws/CommunityHot", data.data);
    }
    if (data.apiName === "CommunityNewthread") {
      store.commit("ws/ws/CommunityNewthread", data.data);
    }
    if (data.apiName === "CommunityAdoption") {
      store.commit("ws/ws/CommunityAdoption", data.data);
    }
    if (data.apiName === "CommunityRandom") {
      store.commit("ws/ws/CommunityRandom", data.data);
    }
    if (data.apiName === "CountryContent") {
      store.commit("ws/ws/CountryContent", data.data);
    }
    if (data.apiName === "ArticleList") {
      store.commit("ws/ws/ArticleList", data.data);
    }

    // 我的
    if (data.apiName === "userThread") {
      store.commit("ws/ws/userThread", data.data);
    }

    if (data.apiName === "group_member_info_query") {
      store.commit("ws/ws/group_member_info_query", data.data);
    }

    if (data.apiName === "group_member_info") {
      store.commit("ws/ws/group_member_info", data.data);
      console.log("勋章信息");
      console.log(data.data);
    }

    if (data.apiName === "task") {
      store.commit("ws/ws/task", data.data);
    }

    if (data.apiName === "Fans") {
      store.commit("ws/ws/Fans", data.data);
    }

    if (data.apiName === "Focus") {
      store.commit("ws/ws/Focus", data.data);
    }

    if (data.apiName === "Favorite") {
      store.commit("ws/ws/Favorite", data.data);
    }

    if (data.apiName === "extcredits") {
      store.commit("ws/ws/extcredits", data.data);
    }

    if (data.apiName === "resume") {
      store.commit("ws/ws/resume", data.data);
      console.log("我的簡歷");
      console.log(data.data);
    }

    if (data.apiName === "delivery") {
      store.commit("ws/ws/delivery", data.data);
    }

    if (data.apiName === "interview") {
      store.commit("ws/ws/interview", data.data);
      console.log("面試紀錄");
      console.log(data.data);
    }

    if (data.apiName === "checked") {
      store.commit("ws/ws/checked", data.data);
    }

    if (data.apiName === "ContactUs") {
      store.commit("ws/ws/ContactUs", data.data);
    }

    if (data.apiName === "telephone") {

      store.commit("ws/ws/telephone", data.data);
    }

    if (data.apiName === "tgPlate") {
      store.commit("ws/ws/tgPlate", data.data);
    }

    if (data.apiName === "userThreadContent") {
      store.commit("ws/ws/userThreadContent", data.data);
      console.log("userThreadContent")
      console.log(data.data)
    }

    if (data.apiName === "ThreadReplies") {
      store.commit("ws/ws/ThreadReplies", data.data);
    }

    if (data.apiName === "MyFans") {
      store.commit("ws/ws/MyFans", data.data);
    }

    if (data.apiName === "FocusUser") {
      store.commit("ws/ws/FocusUser", data.data);
      //   console.log("FocusUser");
      //   console.log(data.data);
    }

    if (data.apiName === "Favorite2") {
      store.commit("ws/ws/Favorite2", data.data);
    }


    // 搜索
    //全局搜索-新聞
    if (data.apiName === "News") {
      store.commit("ws/ws/News", data.data);
    }
    //全局搜索-社區
    if (data.apiName === "Community") {
      store.commit("ws/ws/Community", data.data);
    }
    //全局搜索-使用者
    if (data.apiName === "User") {
      store.commit("ws/ws/User", data.data);
    }
    //全局搜索-招聘
    // if (data.apiName === "job") {
    //   store.commit("ws/ws/job", data.data);
    // }
    //全局搜索-企業
    if (data.apiName === "firmspostQuery") {
      store.commit("ws/ws/firmspostQuery", data.data);
    }
  };

  socket.onerror = function (err) {
    wsData.value.error = err;
  };

  socket.onclose = function () {
    // Reconnect logic if needed
    // 这里可以编写重新连接的逻辑
  };

  // Cleanup socket on component unmount
  // onBeforeUnmount(() => {
  //   socket.close();
  // });

  // onUnmounted(() => {
  //   socket.close();
  // });
}

function send(message) {
  //在这里发送ws的数据
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
}

export {
  wsData,
  send,
  connect
};