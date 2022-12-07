/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
灵敢足迹vip

脚本名称:灵敢足迹vip

使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/footprint-api.quthing.com\/vip\/is\/expire.+$ url script-response-body footprint-api.js
[mitm] 
hostname = *.footprint-api.*
*******************************
Surge

[Script]
^http[s]?:\/\/footprint-api.quthing.com\/vip\/is\/expire.+$ requires-body=1,max-size=0,script-path=footprint-api.js

[MITM]
hostname = *.footprint-api.*

*******************************/
var obj = JSON.parse($response.body);
    obj.checkIsVip= true;
    $done({body: JSON.stringify(obj)});
