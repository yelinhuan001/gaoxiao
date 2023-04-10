/******************************

挖财记账

*******************************
%¥
[rewrite_local]
^https?:\/\/jz\.wacai\.com\/api\/usercenter\/userInfo|https?:\/\/jz\.wacai\.com\/jz-activity\/bkk-frontier\/api\/vipmember\/v3\/index|https?:\/\/jz\.wacai\.com\/api\/vipmember\/v3\/index.*? url script-response-body wcjz.js


[mitm]
hostname = jz.wacai.com,jz.wacai.com,jz.wacai.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"isVip\":\d/g,'"isVip":2');
body = body.replace(/"vipType\":\d/g,'"vipType":2');
body = body.replace(/"vipMemberEnable\":\d/g,'"vipMemberEnable":1');
body = body.replace(/"superExpireDate\":[^,]+/g,'"superExpireDate":4102290188000');
body = body.replace(/"adFreeVipEnable\":\d/g,'"adFreeVipEnable":1');
body = body.replace(/"adFreePermanentVip\":\w+/g,'"adFreePermanentVip":true');
body = body.replace(/"adFreeExpireDate\":[^,]+/g,'"adFreeExpireDate":4102290188000');
$done(body);
