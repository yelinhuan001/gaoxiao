/******************************

soul会员

*******************************

[rewrite_local]

^https?://(47\.98\.249\.183|47\.98\.236\.150|120\.55\.86\.207|api-chat\.soulapp\.cn/chat/limitInfo|api-pay\.soulapp\.cn\/show\/superVIP\/detail\/v2|api-pay\.soulapp\.cn\/privilege\/supervip\/status) url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/gx.js

[mitm] 

hostname = 47.98.249.183,47.98.236.150, 120.55.86.207,api-chat.soulapp.cn,api-pay.soulapp.cn



*******************************/

var body=$response.body;
body = body.replace(/"superVIP\":\w+/g,'"superVIP":true');
body = body.replace(/"superUser\":\w+/g,'"superUser":true');
body = body.replace(/"validTime\":[^,]+/g,'"validTime":32503556671000');
body = body.replace(/"superVIP\":\w+/g,'"superVIP":true');
body = body.replace(/"showSuperVIP\":[^,]+/g,'"showSuperVIP":true');
body = body.replace(/"limit\":\w+/g,'"limit":false');
$done(body);

