/*******************************
⚠️🛝此捷径仅适用于本地重写⚠️🛝
  🧚🏻‍♂️作者：🍡魔法师🍡
  🎈交流群：993539991
🫧脚本名称:恋爱季节宝典搜索
🫧建议配合working copy一起食用
✈️下载地址https://apps.apple.com/app/id896694807✈️
*******************************/
var body=$response.body;
body = body.replace(/"free_search\":\d/g,'"free_search":999');
body = body.replace(/"search_sum\":\d,'"search_sum":999,');
$done(body);
