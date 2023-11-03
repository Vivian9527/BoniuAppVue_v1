import { send } from "@/utils/socket";
import Cookies from "js-cookie"; // 如果未导入，请确保导入 Cookies 库

const token = Cookies.get("token");

export function getPlateIndex() {
  const requestData = {
    apiName: "plateindex",
    token,
  };
  send(requestData);
}

export function getUserPlate(history) {
  const requestData = {
    apiName: "userPlate",
    token,
    history,
  };
  send(requestData);
}

export function getCommunityHot(index) {
  const requestData = {
    apiName: "CommunityHot",
    token,
    index,
  };
  send(requestData);
}

export function getCommunityNewThread(index) {
  const requestData = {
    apiName: "CommunityNewthread",
    token,
    index,
  };
  send(requestData);
}

export function getCommunityAdoption(index) {
  const requestData = {
    apiName: "CommunityAdoption",
    token,
    index,
  };
  send(requestData);
}

export function getCommunityRandom() {
  const requestData = {
    apiName: "CommunityRandom",
    token,
  };
  send(requestData);
}

export function getCountryContent(fid, index) {
  const requestData = {
    apiName: "CountryContent",
    token,
    fid,
    index,
  };
  send(requestData);
}

export function postNewThread(fid, subject, message) {
  const requestData = {
    apiName: "newThread",
    token,
    fid,
    subject,
    message,
  };
  send(requestData);
}
