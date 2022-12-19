/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
电视家vip
脚本名称:电视家vip
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/123.56.125.184 url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/lh.js
[mitm] 
hostname = 123.56.125.184
*******************************
Surge

[Script]
^http[s]?:\/\/123.56.125.184\/api\/v3\/user\/info.+$ requires-body=1,max-size=0,script-path=56.js

[MITM]
hostname = *.56.*

*******************************/
var body=$response.body;
body = body.replace(/"equityTime\":\d,'"equityTime":4100434652000,');
body = body.replace(/"adEquityTime\":\d,'"adEquityTime":4100434652000,');
body = body.replace(/"isTopLevel\":\w,'"isTopLevel":true,');
$done(body);
