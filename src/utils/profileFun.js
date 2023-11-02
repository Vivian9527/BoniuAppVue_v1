import { send } from "@/utils/socket";
import Cookies from "js-cookie"; // 如果未导入，请确保导入 Cookies 库

const token = Cookies.get("token");

export function getUserthread( ) {
    const requestData = {
      apiName: "userthread",
      token,
    };
    send(requestData);
  }
  
  export function getGroupmemberinfo( ) {
    const requestData = {
      apiName: "groupmemberinfo",
      token,
    };
    send(requestData);
  }
  
  export function getMedalinfo( ) {
    const requestData = {
      apiName: "medalinfo",
      token,
    };
    send(requestData);
  }
  
  export function getTask( ) {
    const requestData = {
      apiName: "task",
      token,
    };
    send(requestData);
  }
  
  export function getFans( ) {
    const requestData = {
      apiName: "fans",
      token,
    };
    send(requestData);
  }
  
  export function getFocus( ) {
    const requestData = {
      apiName: "focus",
      token,
    };
    send(requestData);
  }
  
  export function getFavorite( ) {
    const requestData = {
      apiName: "favorite",
      token,
    };
    send(requestData);
  }
  
  export function getExtcredits( ) {
    const requestData = {
      apiName: "extcredits",
      token,
    };
    send(requestData);
  }
  
  export function getResume( ) {
    const requestData = {
      apiName: "resume",
      token,
    };
    send(requestData);
  }
  
  export function getDelivery( ) {
    const requestData = {
      apiName: "delivery",
      token,
    };
    send(requestData);
  }
  
  export function getInterview( ) {
    const requestData = {
      apiName: "interview",
      token,
    };
    send(requestData);
  }
  
  export function getChecked( ) {
    const requestData = {
      apiName: "checked",
      token,
    };
    send(requestData);
  }
  
  export function getUserOther( ) {
    const requestData = {
      apiName: "userOther",
      token,
    };
    send(requestData);
  }
  
  export function getUserthreadconent( ) {
    const requestData = {
      apiName: "userthreadconent",
      token,
    };
    send(requestData);
  }
  
  export function getThreadreplies( ) {
    const requestData = {
      apiName: "threadreplies",
      token,
    };
    send(requestData);
  }
  
  export function postCreatResume(userinfo) {
    const requestData = {
      apiName: "CreatResume",
      token,
      userinfo,
    };
    send(requestData);
  }
  