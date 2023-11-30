const cacheKey = 'video-url';
const videoUrlPattern = /^https?:\/\/.*\/api\/app\/media\/m3u8\/.+\.m3u8$/;

if ($request.url.match(videoUrlPattern)) {
  // 获取匹配到的链接
  let url = $request.url;

  if ($prefs.valueForKey(cacheKey) !== url) {
    // 缓存视频链接到本地存储
    $prefs.setValueForKey(url, cacheKey);

    // 发送通知，并在用户点击通知时提供打开链接或取消操作的选项
    $notify("视频链接已捕获", "", "点击以打开链接", {
      "open-url": url,
      "media-url": url,
      "media-type": "mp4"
    });
  }
} else if ($request.url.match(/^https:\/\/www\.google\..*$/)) {
  // 如果是从 Google 搜索结果页打开链接，则清空缓存的视频链接
  $prefs.setValueForKey('', cacheKey);
} else {
  // 如果请求未被处理但缓存中存在视频链接，则从缓存中获取链接
  let cachedUrl = $prefs.valueForKey(cacheKey);
  if (cachedUrl !== '') {
    // 发送通知，并在用户点击通知时提供打开链接或取消操作的选项
    $notify("视频链接已捕获", "", "点击以打开链接", {
      "open-url": cachedUrl,
      "media-url": cachedUrl,
      "media-type": "mp4"
    });

    // 清空缓存中的视频链接
    $prefs.setValueForKey('', cacheKey);
  }
}

// 完成请求，结束响应
$done({});
