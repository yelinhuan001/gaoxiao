/******************************
歌者盟
*******************************
%¥
[rewrite_local]
^https?:\/\/singerdream\.com.*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/3a25ede704e2984e9218e22c1bf5d1f670128330/gzm.js?token=GHSAT0AAAAAACCFMHPRYVVFMSU3BD5VKNDKZCSKDVA


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
