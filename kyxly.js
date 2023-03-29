/******************************
口语训练营

*******************************
%¥
[rewrite_local]
^https?:\/\/dumb-api20\.qupeiyin\.com\/user\/memberData.*? url script-response-body kyxly.js


[mitm]
hostname = dumb-api20.qupeiyin.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"is_dumbass_vip\":"\d"/g,'"is_dumbass_vip":"1"');
body = body.replace(/"vip_end_time\":"\d+"/g,'"vip_end_time":"32503544235"');
$done(body);
