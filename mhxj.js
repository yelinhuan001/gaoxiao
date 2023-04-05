/******************************
漫画相机+AI换脸变装+消除笔
*******************************
%¥
[rewrite_local]
^https:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo url script-response-body mhxj.js


[mitm]
hostname = appss.rhinoxlab.com/app
%¥
*******************************/

var vip = JSON.parse($response.body);

vip = {
 
  "success" : true,
  "result":{
    "remainTimeSeconds":0,
    "realnameStatus":"YES",
    "wordage":0,
    "mobile" : "咪咁搞笑啦",
    "inviteCode" : "19NSBdKN",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "NO"
      }
    ],
    "type" : "VIP",
    "vipExpireTime" : "2999-01-31 19:56:45",
    "vipExpireDays" : 99999,
    "registerTime" : "2023-01-28 19:55:27",
    "nickname" : "咪咁搞笑啦",
    "times" : 0,
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "dataId" : "10167490692743334431"
  },
  "returnCode" : "200",
  "timeOut" : false
}


$done({body : JSON.stringify(vip)});
