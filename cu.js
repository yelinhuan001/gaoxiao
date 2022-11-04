/*******************************
⚠️🛝此捷径仅适用于本地重写⚠️🛝
  🧚🏻‍♂️作者：🍡魔法师🍡
  🎈交流群：993539991
🫧脚本名称:cubox
🫧建议配合working copy一起食用
✈️下载地址https://apps.apple.com/app/id896694807✈️
*******************************/
var body=$response.body;
body = body.replace(/"admin\":false,'"admin":true,');
body = body.replace(/"level\":0,'"level":1,');
body = body.replace(/"expireTime\":null,'"expireTime":4088436968,');
$done(body);
