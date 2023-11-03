import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "index", // 重定向到 /index
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // 通知
  {
    path: "/NotifiView",
    name: "NotifiView",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/NotifiView.vue"),
  },
  {
    path: "/NotifiSonView/:id",
    name: "NotifiSonView",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/NotifiSonView.vue"),
  },
  // 首頁
  {
    path: "/index",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/index/IndexView.vue"),
  },
  {
    path: "/article/:id",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/ArticleDetail.vue"),
  },
  {
    path: "/author/:id",
    name: "author",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/AuthorDetail.vue"),
  },
  {
    path: "/forum/:id",
    name: "forum",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/ForumView.vue"),
  },
  {
    path: "/selectInsidePage/:id",
    name: "selectInsidePage",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/index/SelectInside.vue"),
  },
  // 招聘
  {
    path: "/hire",
    name: "hire",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/hire/HireView.vue"),
  },

  {
    path: "/findTalent", // 子路由的路徑是相對於父路由的路徑的
    name: "findTalent",
    component: () =>
      import(/* webpackChunkName: "job-list" */ "../views/hire/FindTalent.vue"),
  },
  {
    path: "/findCompany", // 帶參數的子路由
    name: "findCompany",
    component: () =>
      import(
        /* webpackChunkName: "job-details" */ "../views/hire/FindCompany.vue"
      ),
  },
  // 我的
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView.vue"
      ),
  },
  {
    path: "/profileRelease",
    name: "profileRelease",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_release.vue"
      ),
  },
  {
    path: "/ProfileViewFocus",
    name: "ProfileViewFocus",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_focus.vue"
      ),
  },
  {
    path: "/ProfileViewFans",
    name: "ProfileViewFans",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_fans.vue"
      ),
  },
  {
    path: "/ProfileViewFavor",
    name: "ProfileViewFavor",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_favor.vue"
      ),
  },
  {
    path: "/ProfileViewXinBoBi",
    name: "ProfileViewXinBoBi",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_XinBoBi.vue"
      ),
  },
  {
    path: "/ProfileViewMyCv",
    name: "ProfileViewMyCv",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_myCv.vue"
      ),
  },

  {
    path: "/ProfileViewMyCv2",
    name: "ProfileViewMyCv2",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_myCv2.vue"
      ),
  },

  {
    path: "/ProfileViewMyCv3",
    name: "ProfileViewMyCv3",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_myCv3.vue"
      ),
  },
  {
    path: "/ProfileViewMyCv3",
    name: "ProfileViewMyCv3",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_myCv3.vue"
      ),
  },
  {
    path: "/ProfileViewDelivery",
    name: "ProfileViewDelivery",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_delivery.vue"
      ),
  },
  {
    path: "/ProfileViewWhoSee",
    name: "ProfileViewWhoSee",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_whoSee.vue"
      ),
  },
  {
    path: "/ProfileViewInterview",
    name: "ProfileViewInterview",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_interview.vue"
      ),
  },
  {
    path: "/ProfileViewCompany",
    name: "ProfileViewCompany",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_company.vue"
      ),
  },
  {
    path: "/ProfileViewContact",
    name: "ProfileViewContact",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_contact.vue"
      ),
  },
  {
    path: "/ProfileViewPhone",
    name: "ProfileViewPhone",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_phone.vue"
      ),
  },
  {
    path: "/ProfileViewInterest",
    name: "ProfileViewInterest",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/profile/ProfileView_interest.vue"
      ),
  },
  // 社區
  {
    path: "/Community",
    name: "Community",
    component: () =>
      import(
        /* webpackChunkName: "hello" */ "../views/community/CommunityView.vue"
      ),
  },
  //測試用
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/TestView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
