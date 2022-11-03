/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
一言
脚本名称:一言
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/app.yiyan.art.+$ url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/yy.jjs
[mitm] 
hostname = *.yiyan.*
*******************************
Surge

[Script]
^http[s]?:\/\/app.yiyan.art.+$ requires-body=1,max-size=0,script-path=yiyan.js

[MITM]
hostname = *.yiyan.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.viptype= "4",;
    $done({body: JSON.stringify(obj)});
