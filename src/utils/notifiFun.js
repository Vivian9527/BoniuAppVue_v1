// 通知開始

// 在一个独立的模块 shareFunctions.js 中
import {
    send
} from "@/utils/socket";
import Cookies from "js-cookie";
const token = Cookies.get("token");

//我的-消息-求職問答
export function getFirmsAnswer() {

    const requestData = {
        apiName: "FirmsAnswer",
        token,
    }
    send(requestData);
}

//我的-消息-評論
export function getInforMation() {

    const requestData = {
        apiName: "InforMation",
        token,
    }
    send(requestData);

}

//我的-消息-點讚消息
export function getMyArticles() {
    const requestData = {
        apiName: "MyArticles",
        token,
    }
    send(requestData);
}

//我的-消息-關注消息
export function getFollowNews(index) {
    const requestData = {
        apiName: "FollowNews",
        token,
        index: index,
    }
    send(requestData);

}

//我的-消息-官方消息
export function getOfficialNews() {
    const requestData = {
        apiName: "OfficialNews",
        token,
    }
    send(requestData);

}