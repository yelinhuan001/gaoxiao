/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
充电助手
脚本名称:充电助手
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.yonekura.cn\/3.6.8\/uicommon\/getuser.+$ url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/cd.js
[mitm] 
hostname = *.yonekura.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.yonekura.cn\/3.6.8\/uicommon\/getuser.+$ requires-body=1,max-size=0,script-path=yonekura.js

[MITM]
hostname = *.yonekura.*

*******************************/
var obj = JSON.parse($response.body);
    obj.isVip= true,;
obj.expireTime= "4087628687000",;
    $done({body: JSON.stringify(obj)});
