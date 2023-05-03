/******************************
歌者盟
*******************************
%¥
[rewrite_local]
^https?:\/\/singerdream\.com.*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/gzm.js

[mitm]
hostname = singerdream.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"access\":\w+/g,'"access":true');
body = body.replace(/"free\":\w+/g,'"free":true');
body = body.replace(/"vip\":\w+/g,'"vip":true');
body = body.replace(/"freed\":\w+/g,'"freed":true');
$done(body);
