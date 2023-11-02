// 朝聘部分開始


import {
    send
} from "@/utils/socket";
import Cookies from "js-cookie";
const token = Cookies.get("token");


// 招聘-找人才
export function getMans(title) {
    const requestData = {
      apiName: "mans",
      token,
      where: title,
    };
    send(requestData);
  }
  export function getManspost(title, num, where) {
    const requestData = {
      apiName: "manspost",
      token,
      title,
      num,
      where,
    };
    send(requestData);
  }
  
  export function getMansresume(title, jid) {
    const requestData = {
      apiName: "mansresume",
      token,
      title,
      jid,
    };
    send(requestData);
  }
  
  export function getFirms() {
    const requestData = {
      apiName: "firms",
      token,
    };
    send(requestData);
  }
  
  export function getFirmspost(num, title, where) {
    const requestData = {
      apiName: "firmspost",
      token,
      num,
      title,
      where,
    };
    send(requestData);
  }
  
  export function getFirmall(uid) {
    const requestData = {
      apiName: "firmall",
      token,
      uid,
    };
    send(requestData);
  }
  
  export function getJob(where) {
    const requestData = {
      apiName: "job",
      token,
      where,
    };
    send(requestData);
  }
  
  export function getJobpost(where, num) {
    const requestData = {
      apiName: "jobpost",
      token,
      where,
      num,
    };
    send(requestData);
  }
  
  export function getNewjob(where) {
    const requestData = {
      apiName: "newjob",
      token,
      where,
    };
    send(requestData);
  }
  
  export function getNewjobpost(where, num) {
    const requestData = {
      apiName: "newjobpost",
      token,
      where,
      num,
    };
    send(requestData);
  }
  
  export function getGetcity() {
    const requestData = {
      apiName: "getcity",
      token,
    };
    send(requestData);
  }
  
  export function getJobtype() {
    const requestData = {
      apiName: "jobtype",
      token,
    };
    send(requestData);
  }
  
  export function getJobposition() {
    const requestData = {
      apiName: "jobposition",
      token,
    };
    send(requestData);
  }
  
  export function getJobcontent(pid) {
    const requestData = {
      apiName: "jobcontent",
      token,
      pid,
    };
    send(requestData);
  }
  
  export function getHirebanner() {
    const requestData = {
      apiName: "hirebanner",
      token,
    };
    send(requestData);
  }
  
  export function getGetsalary() {
    const requestData = {
      apiName: "getsalary",
      token,
    };
    send(requestData);
  }
  
  export function getGetdegree() {
    const requestData = {
      apiName: "getdegree",
      token,
    };
    send(requestData);
  }
  
  export function getGetWorkExperience() {
    const requestData = {
      apiName: "getWorkExperience",
      token,
    };
    send(requestData);
  }
  
  export function getGetCitizenship() {
    const requestData = {
      apiName: "getCitizenship",
      token,
    };
    send(requestData);
  }
  
  export function getGetwelfare() {
    const requestData = {
      apiName: "getwelfare",
      token,
    };
    send(requestData);
  }
  
  export function getGetplace() {
    const requestData = {
      apiName: "getplace",
      token,
    };
    send(requestData);
  }