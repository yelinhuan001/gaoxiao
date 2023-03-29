/******************************

贝乐虎启蒙+儿歌+识字

*******************************

[rewrite_local]

^https?:\/\/uc\.ubestkid\.com\/web\/user\/getUserProfile|https?:\/\/aicblhapp\.ubestkid\.com.*? url script-response-body blh.js

[mitm] 

hostname = uc.ubestkid.com,aicblhapp.ubestkid.com



*******************************/

var body=$response.body;
body = body.replace(/"expireDate\":\d+/g,'"expireDate":32479080273000');
body = body.replace(/"free\":\d/g,'"free":1');
body = body.replace(/"unlockStatus\":\d/g,'"unlockStatus":1')
$done(body);
