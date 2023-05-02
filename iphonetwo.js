/******************************
iphone通用内购2
*******************************

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body https://raw.githubusercontent.com/yelinhuan001/gaoxiao/main/iphonetwo.js

[mitm] 

hostname = api.revenuecat.com


*******************************/


var user= JSON.parse($response.body);

user = {
   "request_date_ms" : 1663813730272,
  "request_date" : "2022-09-22T02:28:50Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-09-22T02:12:43Z",
    "original_application_version" : "322",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.algoriddim.djay_iphone_free.pro_loyalty_2.yearly" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "pro",
        "expires_date" : "2099-10-14T07:49:44Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : "2022-09-22T02:21:43Z",
        "original_purchase_date" : "2022-09-22T02:19:33Z",
        "purchase_date" : "2022-09-22T02:19:32Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-09-22T02:19:32Z",
        "product_identifier" : "com.algoriddim.djay_iphone_free.pro_loyalty_2.yearly",
        "expires_date" : "2099-10-14T07:49:44Z"
      }
    },
    "original_purchase_date" : "2022-09-10T12:59:20Z",
    "original_app_user_id" : "$RCAnonymousID:Eric",
    "last_seen" : "2022-09-22T02:12:43Z"
  }
}
$done({body : JSON.stringify(user)});
