/******************************

问真八字
*******************************
%¥
[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com.*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/wzbz.js


[mitm]
hostname = bzpp2.iwzbz.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"expires\": ".*?\"/g,'"expires": "2999-01-01"');
body = body.replace(/"vipLevel\": \d+/g,'"vipLevel": 3');
body = body.replace(/"data\": ".*?\"/g,'"data": "100000,名留青史 飘然隐归"');
$done(body);
