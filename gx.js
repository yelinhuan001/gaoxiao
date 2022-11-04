/******************************
⚠️如果放远程，请把Hh.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:爱证件
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************

[rewrite_local]
^https?:\/\/zhengjian\.flyingeffect\.com\/api\/user\/userInfo*? url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/gx.js


[mitm]
hostname = zhengjian.flyingeffect.com

*******************************/
var body=$response.body;
body = body.replace(/"vip_end_time\":".*?\"/g,'"vip_end_time":"2099-07-12 15:06:30"');
$done(body);
