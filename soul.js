/******************************

soul

*******************************

[rewrite_local]

^https:\/\/api-pay\.soulapp\.cn|https:\/\/api-pay\.soulapp\.cn|https:\/\/api-chat\.soulapp\.cn\/chat\/limitInfo|https?:\/\/47\.98\.249\.183|https?:\/\/47\.98\.236\.150|https?:\/\/47\.98\.249\.183|https?:\/\/120\.55\.86\.207|https?:\/\/114\.215\.255\.94|https?:\/\/120\.55\.55\.115|https?:\/\/47\.98\.137\.249|https?:\/\/47\.98\.54\.106|https?:\/\/118\.31\.112\.221.*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/soul.js

[mitm]

hostname = api-pay.soulapp.cn,api-chat.soulapp.cn,47.98.249.183,47.98.236.150,47.98.249.183,120.55.86.207,114.215.255.94,120.55.55.115,47.98.137.249,47.98.54.106,118.31.112.221

*************************************/


var body=$response.body;
body = body.replace(/"superVIP\":\w+/g,'"superVIP":true');
body = body.replace(/"superUser\":\w+/g,'"superUser":true');
body = body.replace(/"validTime\":[^,]+/g,'"validTime":32503556671000');
body = body.replace(/"superVIP\":\w+/g,'"superVIP":true');
body = body.replace(/"showSuperVIP\":[^,]+/g,'"showSuperVIP":true');
body = body.replace(/"hasFlyPackage\":\w+/g,'"hasFlyPackage":true');
body = body.replace(/"limit\":\w+/g,'"limit":false');

$done({body});
