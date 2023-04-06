/******************************

soul

*******************************

[rewrite_local]

^https:\/\/api-pay\.soulapp\.cn\/privilege\/supervip\/status|https:\/\/api-pay\.soulapp\.cn\/show\/superVIP\/detail\/v2|https:\/\/api-chat\.soulapp\.cn\/chat\/limitInfo.*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/soul.js

[mitm]

hostname = api-pay.soulapp.cn,api-chat.soulapp.cn

*************************************/


body = $response.body.replace(/\"superVIP":\w+/g,'\"superVIP":true').replace(/\"showSuperVIP":\w+/g,'\"showSuperVIP":true').replace(/\"hasFlyPackage":\w+/g,'\"hasFlyPackage":true').replace(/\"validTime":[^,]+/g,'\"validTime":32503556671000').replace(/\"superUser":\w+/g,'\"superUser":true').replace(/\"limit":\w+/g,'\"limit":false');

$done({body});
