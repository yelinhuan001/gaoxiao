/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
cubox
脚本名称:cubox
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/cubox.pro\/c\/api\/userInfo.+$ url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/cu.j
[mitm] 
hostname = *.cubox.*
*******************************
Surge

[Script]
^http[s]?:\/\/cubox.pro\/c\/api\/userInfo.+$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/cu.js

[MITM]
hostname = *.cubox.*

*******************************/
var obj = JSON.parse($response.body);
    obj.admin= true,;
obj.level= 1,;
obj.expireTime= 4088436968,;
    $done({body: JSON.stringify(obj)});
