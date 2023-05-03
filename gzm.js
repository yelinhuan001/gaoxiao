/******************************
歌者盟
*******************************
%¥
[rewrite_local]
^https?:\/\/singerdream\.com.*? url script-response-body https://github.com/yelinhuan001/gaoxiao/blob/c9fa18b808c7df257d58bf83338d0fb86fa32907/gzm.js

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
