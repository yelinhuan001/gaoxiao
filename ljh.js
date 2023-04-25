/******************************
靓机汇
*******************************

[rewrite_local]

^https:\/\/guapi\.liangjihui\.com\/front\/user\/memberInfo url script-response-body ljh.js

[mitm] 

hostname = guapi.liangjihui.com


*******************************/

body = $response.body.replace(/\"end_time":\d+/g, '\"end_time":4102274685').replace(/\"is_member":\w+/g,'\"is_member":true');

$done({body});
