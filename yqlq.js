/******************************
一起练琴

[rewrite_local]
^https?:\/\/api\.mangofuture\.cn\/client\/v2\/user_vip|https?:\/\/api\.lianqinba\.com\/client\/v2\/user_vip|https?:\/\/api\.lianqinba\.com\/client\/v2\/my_info|https?:\/\/api\.mangofuture\.cn\/client\/v2\/my_info|https?:\/\/api\.mangofuture\.cn\/client\/v2\/my_info.*? url script-response-body yqlq.js


[mitm]
hostname = api.mangofuture.cn,api.lianqinba.com,api.lianqinba.com,api.mangofuture.cn,api.mangofuture.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"instrument\":"\w+"/g,'"instrument":"violin"');
body = body.replace(/"vip_last_day\":[^,]+/g,'"vip_last_day":"2099-04-16"');
body = body.replace(/"vip_status_string\":".*?\"/g,'"vip_status_string":"VIP有效期2099-04-16"');
body = body.replace(/"buy_or_continue\":".*?\"/g,'"buy_or_continue":"续费"');
body = body.replace(/"is_vip_valid\":\w+/g,'"is_vip_valid":true');
$done(body);
