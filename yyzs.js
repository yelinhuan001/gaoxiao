/****************************************

项目名称：用药助手1

*****************************************

[rewrite_local]
^https:\/\/newdrugs\.dxy\.cn\/app\/user\/pro\/stat url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/yyzs.js

[mitm]
hostname = newdrugs.dxy.cn

****************************************/


var user= JSON.parse($response.body);

user = {
    "message": "成功",
  "code": "success",
  "data": {
    "expireDate": "2099-04-10 21:00:15",
    "userProStatStatusEnum": "VALID",
    "userProInfoVO": {
      "subscribe": false,
      "subscribeExpiresDate": "1970-01-01 00:00:00",
      "expiredTime": "2099-04-10 21:00:15",
      "androidWithhold": false,
      "rightsNum": 12,
      "activeType": 5,
      "expiredDay": 0,
      "userProStatStatusEnum": "VALID",
      "placeholderVip": true,
      "subscribeButtonText": "立即开通 ¥178/年",
      "purchaseTotalValue": 494,
      "upgradeSvipCount": 0,
      "appendDays": 0,
      "needReadSelectionCount": 0,
      "havingReadSelectionCount": 0
    },
    "svipUserProInfo": {
      "subscribe": false,
      "subscribeExpiresDate": "1970-01-01 00:00:00",
      "expiredTime": "2099-04-10 21:00:15",
      "androidWithhold": false,
      "rightsNum": 13,
      "activeType": 1,
      "expiredDay": 9999,
      "userProStatStatusEnum": "VALID",
      "placeholderVip": false,
      "subscribeButtonText": "首月9元",
      "purchaseTotalValue": 782,
      "upgradeSvipCount": 0,
      "appendDays": 15,
      "needReadSelectionCount": 10,
      "havingReadSelectionCount": 0
    },
    "memberDiscount": false,
    "userProDiscountType": 12,
    "userProDiscountPromptType": 0,
    "promotionDiscountPromptType": 0,
    "remainExpiredDay": 9999,
    "discountPrice": 21,
    "promotionPeriod": false,
    "upgradable": false,
    "displayUpgradeProduct": false
  }
}
$done({body : JSON.stringify(user)});
