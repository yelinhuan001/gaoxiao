/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
清理大师VIP
脚本名称:清理大师VIP
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/clean-xud.laoyinnianhua.com\/api\/guests\/login.+$ url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/lh.js
[mitm] 
hostname = *.laoyinnianhua.*
*******************************
Surge

[Script]
^http[s]?:\/\/clean-xud.laoyinnianhua.com\/api\/guests\/login.+$ requires-body=1,max-size=0,script-path=laoyinnianhua.js

[MITM]
hostname = *.laoyinnianhua.*

*******************************/

var body=$response.body;
body = body.replace(/"vip\":\d,'"vip":1,');
body = body.replace(/"vip_expire_date\":\d/g,'"vip_expire_date":4101410282000');
$done(body);
