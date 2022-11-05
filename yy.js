[rewrite_local]

# ～ 一言解锁会员权限（2022-07-21）@ddgksf2013
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Crack/yiyan.js

[mitm] 

hostname=app.yiyan.art

***********************************/
var body = $response.body.replace(/viptype":"1"/g, 'viptype":"4"')
$done({ body });
