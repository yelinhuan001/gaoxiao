/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
恋爱季节宝典搜索
脚本名称:恋爱季节宝典搜索
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http?:\/\/apic.qushuiyin.com\/index.php\/v4\/new\/vip\/memberVip*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/gx.js
[mitm] 
hostname = apic.qushuiyin.com
*******************************
Surge

[Script]
^http[s]?:\/\/apic.qushuiyin.com\/index.php\/v4\/new\/vip\/memberVip.+$ requires-body=1,max-size=0,script-path=apic.js

[MITM]
hostname = *.apic.*

*******************************/
var body=$response.body;
body = body.replace(/"free_search\":\d/g,'"free_search":999');
body = body.replace(/"search_sum\":\d,'"search_sum":999,');
$done(body);
