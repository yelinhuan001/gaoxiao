/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
威锋vip
脚本名称:威锋vip
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.wfdata.club\/v1\/user\/homePageInfo.+$ url script-response-body wfdata.js
[mitm] 
hostname = *.wfdata.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.wfdata.club\/v1\/user\/homePageInfo.+$ requires-body=1,max-size=0,script-path=wfdata.js

[MITM]
hostname = *.wfdata.*

*******************************/
var obj = JSON.parse($response.body);
    obj.isUgcUser= true,;
obj.vipExpiryDate= "2099-1-1",;
obj.isVip= true;
    $done({body: JSON.stringify(obj)});
