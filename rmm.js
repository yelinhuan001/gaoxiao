/******************************
软眠眠(免登陆)
*******************************

[rewrite_local]

^https:\/\/ruanmianmian\.xinzhi\.space\/api\/v1\/queryDeviceBuyRecord url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/rmm.js

[mitm] 

hostname = ruanmianmian.xinzhi.space


*******************************/


body = $response.body.replace(/\"is_vip":\d+/g, '\"is_vip":1')

$done({body});
