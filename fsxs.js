/******************************
番薯小说

*******************************
%¥
[rewrite_local]
^https?:\/\/g20\.manmeng168\.com\/v1\/client\/user\/completeUserInfo.*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/fsxs.js


[mitm]
hostname = g20.manmeng168.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vip\":\w+/g,'"vip":true');
body = body.replace(/"vip_end_time\":\d+/g,'"vip_end_time":32493837668000');
$done(body);
