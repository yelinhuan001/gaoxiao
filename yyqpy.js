/******************************
英语趣配音
*******************************
%¥
[rewrite_local]
^https:\/\/apis40\.qupeiyin\.com\/member\/index|https:\/\/apis40\.qupeiyin\.com\/funds\/vip_list|https:\/\/apis40\.qupeiyin\.com\/user\/member_data url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/yyqpy.js


[mitm]
hostname = apis40.qupeiyin.com
%¥
*******************************/

var body=$response.body;
body = body.replace(/"vip_button_text\":".*?\"/g,'"vip_button_text":"续费"');
body = body.replace(/"vip_text\":".*?\"/g,'"vip_text":"您的SVIP会员356754天后到期"');
body = body.replace(/"svip_endtime\":".*?\"/g,'"svip_endtime":"32503492921"');
body = body.replace(/"is_svip\":"\d"/g,'"is_svip":"1"');
body = body.replace(/"is_vip\":"\d"/g,'"is_vip":"1"');
body = body.replace(/"show_svip\":"\d"/g,'"show_svip":"1"');
body = body.replace(/"grow_level\":"\d"/g,'"grow_level":"1"');
body = body.replace(/"station\":"\d"/g,'"station":"2"');
body = body.replace(/"study_stage\":"\d"/g,'"study_stage":"2"');
body = body.replace(/"study_stage_grade\":"\d"/g,'"study_stage_grade":"1"');
body = body.replace(/"share_get_vip\":"\d"/g,'"share_get_vip":"1"');
body = body.replace(/"new_user\":\d/g,'"new_user":1');
body = body.replace(/"if_subtitle\":"\d"/g,'"if_subtitle":"1"');
body = body.replace(/"subtitle_num\":"\d+"/g,'"subtitle_num":"1"');
body = body.replace(/"umeng_channel\":".*?\"/g,'"umeng_channel":"gy2022"');
body = body.replace(/"login\":"\d"/g,'"login":"2"');
$done(body);
