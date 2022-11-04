

/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
爱证件
脚本名称:爱证件
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/zhengjian.flyingeffect.com\/api\/user\/userInfo.+$ url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/gx.js
[mitm] 
hostname = *.flyingeffect.*
*******************************
Surge

[Script]
^http[s]?:\/\/zhengjian.flyingeffect.com\/api\/user\/userInfo.+$ requires-body=1,max-size=0,script-path=flyingeffect.js

[MITM]
hostname = *.flyingeffect.*

*******************************/
var obj = JSON.parse($response.body);
    obj.is_vip= 1;
obj.vip_end_time= "2099-12-30";
    $done({body: JSON.stringify(obj)});
